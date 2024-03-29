import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
import { ProjectData } from '../../interfaces/data';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../lib/context/DataContext/DataContext';
import { useGetLists } from '../../lib/hooks/list/useGetLists';
import { useRouter } from 'next/router';
import { IBoardData } from '../../interfaces/board.interface';
import { boardStore, IBoardComponent } from '../../store/boardStore';
import { shallow } from 'zustand/shallow';
import { addListState } from '../../lib/utils/addListState';
import { listStore } from '../../store/listStore';

const BoardComponent = () => {
  const data = useContext(DataContext);

  const router = useRouter();

  // Save idBoard to local storage
  const { board } = router.query;
  let idBoard;

  if (board !== undefined) {
    idBoard = board[0];
    localStorage.setItem('idBoard', JSON.stringify(idBoard));
  }

  // Get all board list
  const { data: listData, isSuccess, isError, isLoading } = useGetLists();

  // Global state for board and list
  const { modalState, updateModalState } = boardStore(
    (state) => ({
      modalState: state.modalState,
      updateModalState: state.updateModalState,
    }),
    shallow
  );

  const { updateListState } = listStore(
    (state) => ({
      updateListState: state.updateListState,
    }),
    shallow
  );

  useEffect(() => {
    if (isSuccess) {
      const filteredList: any = listData.flatMap((item: any) => {
        return item.cards.map((card: any) => {
          return { _id: card._id, isOpen: false };
        });
      });
      updateModalState(filteredList);
    }
  }, [isSuccess, listData, updateModalState]);

  useEffect(() => {
    const listState = addListState(listData);
    updateListState(listState);
  }, [listData, updateListState]);

  if (isLoading) {
    return <p></p>;
  }

  if (listData) {
    return (
      <div className='flex flex-col gap-3'>
        <BoardHeader />
        <ul className='flex flex-row items-start gap-4'>
          {listData.map(({ _id, listName, cards }: IBoardData) => {
            return (
              <li key={_id}>
                <Card listName={listName} cards={cards} />
              </li>
            );
          })}

          <li>
            <AddCard />
          </li>
        </ul>
      </div>
    );
  }

  // const stringifiedIdBoard = String(localStorage.getItem('idBoard'));
  // const storedIdBoard = JSON.parse(stringifiedIdBoard);

  // console.log(storedIdBoard);

  // return (
  //   <div className='flex flex-col gap-3'>
  //     <BoardHeader />
  //     <ul className='flex flex-row items-start gap-4'>
  //       {listData.map(({ _id, listName, cards }: IBoardData) => {
  //         return (
  //           <li key={_id}>
  //             <Card listName={listName} cards={cards} />
  //           </li>
  //         );
  //       })}

  //       <li>
  //         <AddCard />
  //       </li>
  //     </ul>
  //   </div>
  //   // <div className='flex flex-col gap-3'>
  //   //   <BoardHeader />
  //   //   <ul className='flex flex-row items-start gap-4'>
  //   //     {data.map(({ cardTitle, cardChildren }: ProjectData) => {
  //   //       return (
  //   //         <li key={cardTitle}>
  //   //           <Card cardTitle={cardTitle} cardChildren={cardChildren} />
  //   //         </li>
  //   //       );
  //   //     })}

  //   //     <li>
  //   //       <AddCard />
  //   //     </li>
  //   //   </ul>
  //   // </div>
  // );
};

export default BoardComponent;
