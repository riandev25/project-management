import Link from 'next/link';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useGetBoard } from '../../lib/hooks/user/useGetBoard';
import { setLocalStorage } from '../../lib/utils/localStorage';
import { userStore } from '../../store/userStore';
import CreateBoardModal from './CreateBoardModal';

const BOARD_LIST = ['PM', 'NEW PM'];

// interface IBoardList{
//   boardsData:
// }

const BoardList = () => {
  const { data, isSuccess, isLoading } = useGetBoard();

  let responseData = BOARD_LIST;

  const { isModalOpen, toggleModal } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  // useEffect(() => {
  //   if (isSuccess) {
  //     const newData = data.map((item: any) => {
  //       return item._id
  //     });
  //     setLocalStorage('boardList', newData);
  //   }
  // }, [data, isSuccess]);

  if (isLoading) {
    return (
      <div className='relative flex flex-col w-full xs:w-[50rem] px-3 xs:px-6 bg-gray-800 text-gray-200 font-bold'>
        <h1 className='px-2 py-3'>Your workspaces</h1>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-pulse'>
          {responseData.map((item: any, i) => {
            return (
              <li
                className='relative flex h-24 w-full bg-gray-300 rounded-md hover:bg-gray-400'
                key={i}
              >
                <span className='absolute top-2 left-2 text-gray-800'>
                  {item.boardName}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (isSuccess) {
    responseData = data;
  }
  return (
    <div className='relative flex flex-col w-full xs:w-[50rem] px-3 xs:px-6 text-gray-700 font-bold'>
      <h1 className='px-2 py-3'>Your workspaces</h1>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {responseData.map((item: any, i) => {
          return (
            <li
              className='relative flex h-24 bg-blue-600 rounded-md hover:bg-blue-700'
              key={i}
            >
              <Link
                href={`/b/${item._id}/${item.boardName}`}
                className='w-full h-full'
              >
                <span className='absolute top-2 left-2 text-gray-200'>
                  {item.boardName}
                </span>
              </Link>
            </li>
          );
        })}
        <li className='relative h-24 bg-gray-200 rounded-md hover:bg-gray-300'>
          <button
            className='flex justify-center items-center w-full h-full'
            onClick={toggleModal}
          >
            <h3 className='text-gray-700'>Create board</h3>
          </button>
          {isModalOpen ? <CreateBoardModal /> : null}
        </li>
      </ul>
    </div>
  );
};

export default BoardList;
