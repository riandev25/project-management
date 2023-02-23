import { shallow } from 'zustand/shallow';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import { userStore } from '../../store/userStore';
import BoardList from './BoardList';

const UserBoard = () => {
  const { mutateAsync, isLoading, isSuccess } = useAuthLogout();

  const { toggleModal, isModalOpen } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const logoutSubmitHandler = async () => {
    await mutateAsync();
  };

  return (
    <div className='relative flex flex-row justify-center w-full min-h-screen py-12 bg-gray-800'>
      <BoardList />
      <button
        className='absolute top-4 right-4 text-sm sm:text-base font-light text-gray-300 hover:text-gray-800 px-2 py-1 xs:px-4 xs:py-2 bg-transparent border border-gray-300 transition-colors rounded-md hover:bg-gray-300'
        type='button'
        onClick={logoutSubmitHandler}
      >
        Logout
      </button>
      {isModalOpen ? (
        <div className='z-20 sticky top-0 left-0 w-screen min-h-screen h-full bg-black opacity-70'></div>
      ) : null}
    </div>
  );
};
export default UserBoard;
