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
import { setLocalStorage } from '../../lib/utils/localStorage';
import { useGetBoard } from '../../lib/hooks/user/useGetBoard';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useGetLabels } from '../../lib/hooks/labels/useGetLabels';

const BoardComponent = () => {
  const router = useRouter();

  const { idBoard, boardName } = router.query;

  if (idBoard !== undefined && boardName !== undefined) {
    setLocalStorage('idBoard', String(idBoard));
    setLocalStorage('boardName', String(boardName));
  }

  // Get all boards
  const {
    data: boardList,
    isSuccess: isGetBoardSuccess,
    isLoading: isGetBoardLoading,
  } = useGetBoard();

  // Get all lists
  const { data: listData, isSuccess, isLoading } = useGetLists();

  // Get all labels
  const { data: labelsData } = useGetLabels();

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

  // Drag and drop event handler
  const handleDragEnd = (result: DropResult) => {};

  useEffect(() => {
    if (boardList && idBoard && isGetBoardSuccess) {
      const idBoardExist = boardList.find((board) => board._id === idBoard);
      if (!idBoardExist) {
        router.push('/404');
      }
    }
  }, [boardList, idBoard, isGetBoardSuccess, router]);

  useEffect(() => {
    if (isSuccess && listData) {
      console.log(listData);
      const filteredList = listData.flatMap((item: any) => {
        return item.cards.map((card: any) => {
          return { _id: card._id, isOpen: false, isCardOptionOpen: false };
        });
      });
      updateModalState(filteredList);
    }
  }, [isSuccess, listData, updateModalState]);

  useEffect(() => {
    if (isSuccess && listData) {
      const listState = addListState(listData);
      updateListState(listState);
    }
  }, [isSuccess, listData, updateListState]);

  if (isLoading && isGetBoardLoading) return <p></p>;

  return (
    <div className='relative flex flex-col px-2 sm:px-3 gap-4 sm:gap-3 min-h-screen max-w-screen'>
      <BoardHeader />
      <DragDropContext onDragEnd={handleDragEnd}>
        <ul className='flex flex-row items-start gap-4 overflow-x-auto flex-1 w-full snap-x'>
          {listData?.map(({ _id, listName, cards }: IBoardData, i: number) => {
            return (
              <li key={i} className='w-auto snap-center'>
                <Card
                  _id={_id}
                  listName={listName}
                  cards={cards}
                  labels={labelsData}
                />
              </li>
            );
          })}

          <li className='w-auto'>
            <AddCard />
          </li>
        </ul>
      </DragDropContext>

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
