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

const BoardComponent = () => {
  const data = useContext(DataContext);

  const router = useRouter();
  const { board } = router.query;
  let idBoard;

  if (board !== undefined) {
    idBoard = board[0];
    localStorage.setItem('idBoard', JSON.stringify(idBoard));
  }

  const { data: listData, isSuccess } = useGetLists();

  const { modalState, updateModalState } = boardStore((state) => ({
    modalState: state.modalState,
    updateModalState: state.updateModalState,
  }));

  useEffect(() => {
    if (isSuccess) {
      const filteredList: IBoardComponent[] = listData.map(
        (item: IBoardComponent) => {
          return { _id: item._id, isOpen: false };
        }
      );
      updateModalState(filteredList);
    }
  }, [isSuccess, listData, updateModalState]);

  console.log(modalState);

  if (isSuccess) {
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
      // <div className='flex flex-col gap-3'>
      //   <BoardHeader />
      //   <ul className='flex flex-row items-start gap-4'>
      //     {data.map(({ cardTitle, cardChildren }: ProjectData) => {
      //       return (
      //         <li key={cardTitle}>
      //           <Card cardTitle={cardTitle} cardChildren={cardChildren} />
      //         </li>
      //       );
      //     })}

      //     <li>
      //       <AddCard />
      //     </li>
      //   </ul>
      // </div>
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
