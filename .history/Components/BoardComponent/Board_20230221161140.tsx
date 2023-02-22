import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
import { useEffect, useState } from 'react';
import { useGetLists } from '../../lib/hooks/list/useGetLists';
import { useRouter } from 'next/router';
import { IBoardData } from '../../interfaces/board.interface';
import { boardStore, IBoardComponent } from '../../store/boardStore';
import { shallow } from 'zustand/shallow';
import { addListState } from '../../lib/utils/addListState';
import { listStore } from '../../store/listStore';
import { getLocalStorage, setLocalStorage } from '../../lib/utils/localStorage';
import { useGetBoard } from '../../lib/hooks/user/useGetBoard';

const BoardComponent = () => {
  const router = useRouter();

  const { idBoard, boardName } = router.query;

  const { data: boardList, isSuccess: isGetBoardSuccess } = useGetBoard();

  if (idBoard !== undefined && boardName !== undefined) {
    setLocalStorage('idBoard', String(idBoard));
    setLocalStorage('boardName', String(boardName));
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

  const isOneCardOptionOpen = modalState.find(
    (modalState) => modalState.isCardOptionOpen === true
  )?.isCardOptionOpen;

  const [validUrl, setValidUrl] = useState<boolean>(false);
  const [renderPage, setRenderPage] = useState<boolean>(false);

  useEffect(() => {
    if (boardList && idBoard && isGetBoardSuccess) {
      const idBoardExist = boardList.find(
        (board: any) => board._id === idBoard
      );
      if (!idBoardExist && !validUrl) {
        router.push('/404');
        setValidUrl(true);
      } else {
        setRenderPage(true);
      }
    }
  }, [boardList, idBoard, isGetBoardSuccess, router, validUrl]);

  useEffect(() => {
    if (isSuccess) {
      const filteredList: any = listData.flatMap((item: any) => {
        return item.cards.map((card: any) => {
          return { _id: card._id, isOpen: false, isCardOptionOpen: false };
        });
      });
      updateModalState(filteredList);
    }
  }, [isSuccess, listData, updateModalState]);

  useEffect(() => {
    if (isSuccess) {
      console.log(isSuccess);
      const listState = addListState(listData);
      updateListState(listState);
    }
  }, [isSuccess, listData, updateListState]);

  useEffect(() => {
    console.log('rendered');
    setRenderPage(true);
  }, [listData]);

  if (isLoading) {
    return <p></p>;
  }

  if (!validUrl) return <p></p>;

  if (!listData && !boardList && !renderPage) return <p></p>;

  return (
    <div className='relative flex flex-col px-2 sm:px-3 gap-4 sm:gap-3 min-h-screen max-w-screen'>
      <BoardHeader />
      <ul className='flex flex-row items-start gap-4 overflow-x-auto flex-1 w-full snap-x'>
        {listData.map(({ _id, listName, cards }: IBoardData, i: number) => {
          return (
            <li key={i} className='w-auto snap-center'>
              <Card _id={_id} listName={listName} cards={cards} />
            </li>
          );
        })}

        <li className='w-auto'>
          <AddCard />
        </li>
      </ul>
      {isOneCardOptionOpen ? (
        <div
          className='absolute z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            transition: 'background-color 0.2s ease-in-out',
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default BoardComponent;
