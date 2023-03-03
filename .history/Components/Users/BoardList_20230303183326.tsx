import Link from 'next/link';
import { shallow } from 'zustand/shallow';
import { useGetBoard } from '../../lib/hooks/user/useGetBoard';
import { userStore } from '../../store/userStore';
import CreateBoardModal from './CreateBoardModal';

const BOARD_LIST = ['', '', '', '', ''];

const BoardList = () => {
  const { data, isLoading, isError } = useGetBoard();

  let responseData = BOARD_LIST;

  const { isModalOpen, toggleModal } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  if (isLoading) {
    return (
      <div className='relative flex flex-col w-full xs:w-[50rem] px-3 xs:px-6 text-gray-700 font-bold'>
        <h1 className='px-2 py-3 text-gray-300'>Your workspaces</h1>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {responseData.map((item: any, i) => {
            return (
              <li
                className='relative flex w-full h-24 bg-gray-300 rounded-md animate-pulse'
                key={i}
              >
                <span className='absolute top-2 left-2 text-gray-700'>
                  {item.boardName}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className='relative flex flex-col w-full xs:w-[50rem] px-3 xs:px-6 text-gray-700 font-bold'>
      <h1 className='px-2 py-3 text-gray-300'>Your workspaces</h1>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {data?.map((item, i) => {
          return (
            <li
              className='relative flex h-24 bg-gray-300 rounded-md hover:bg-gray-400'
              key={i}
            >
              <Link
                href={`/b/${item._id}/${item.boardName}`}
                className='w-full h-full'
              >
                <span className='absolute top-2 left-2'>{item.boardName}</span>
              </Link>
            </li>
          );
        })}
        <li className='relative h-24 bg-white rounded-md hover:bg-gray-200'>
          <button
            className='flex justify-center items-center w-full h-full'
            onClick={toggleModal}
          >
            <h3 className=''>Create board</h3>
          </button>
        </li>
      </ul>

      {isModalOpen ? <CreateBoardModal /> : null}
    </div>
  );
};

export default BoardList;
