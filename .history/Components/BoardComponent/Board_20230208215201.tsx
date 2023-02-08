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
import {
  getArrayLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from '../../lib/utils/localStorage';
import { useGetBoard } from '../../lib/hooks/user/useGetBoard';

interface IBoardListLocalStorage {
  idBoard: string;
  boardName: string;
}

const BoardComponent = () => {
  const router = useRouter();

  // const ifIdBoard = getLocalStorage('idBoard');
  // console.log(ifIdBoard);

  // if (ifIdBoard) {
  //   const { board } = router.query;
  //   console.log(board);
  //   if (board !== undefined && ifIdBoard === board[0]) {
  //     router.push(`${ifIdBoard}/${board[1]}`);
  //   } else {
  //     router.push('/404');
  //   }
  // } else {
  //   const { board } = router.query;

  //   if (board !== undefined) {
  //     const idBoard = board[0];
  //     const boardName = board[1];
  //     setLocalStorage('idBoard', idBoard);
  //     setLocalStorage('boardName', boardName);
  //   }
  // }

  const { idBoard, boardName } = router.query;

  // if (typeof window !== undefined) {
  const { data: boardList, isSuccess: isGetBoardSuccess } = useGetBoard();
  // const boardList = getLocalStorage('boardList');
  // const formattedBoardList = [...boardList];
  // if (isGetBoardSuccess) {
  //   const idBoardExist = boardList.find((board: any) => board._id === idBoard);
  //   if (!idBoardExist) router.push('/404');
  // }

  // const idBoardExist = boardList.find(
  //   (board: any) => board.idBoard === idBoard
  // );
  // const boardNameExist = boardList.find(
  //   (board: any) => board.boardName === boardName
  // );

  // }

  // Save idBoard to local storage
  // const { board } = router.query;
  // let idBoard;
  // let boardName;

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

  const [validUrl, setValidUrl] = useState<boolean>(false);

  useEffect(() => {
    if (boardList && idBoard) {
      const idBoardExist = boardList.find(
        (board: any) => board._id === idBoard
      );
      if (!idBoardExist && !validUrl) {
        router.push('/404');
        setValidUrl(true);
      }
    }
  }, [boardList, idBoard, router, validUrl]);

  useEffect(() => {
    if (isSuccess) {
      console.log(isSuccess);
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

  if (isLoading) {
    return <p></p>;
  }

  if (!listData && !boardList) return <p></p>;

  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <ul className='flex flex-row items-start gap-4'>
        {listData.map(({ _id, listName, cards }: IBoardData) => {
          return (
            <li key={_id}>
              <Card _id={_id} listName={listName} cards={cards} />
            </li>
          );
        })}

        <li>
          <AddCard />
        </li>
      </ul>
    </div>
  );
};

export default BoardComponent;
