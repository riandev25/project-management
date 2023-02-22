import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import BoardList from './BoardList';

const UserBoard = () => {
  const { mutateAsync, isLoading, isSuccess } = useAuthLogout();

  const logoutSubmitHandler = async () => {
    await mutateAsync();
  };

  return (
    <div className='relative flex flex-row justify-center w-full py-12'>
      <BoardList />
      <button
        className='absolute top-4 right-4 text-sm sm:text-base text-gray-800 px-2 py-1 xs:px-4 xs:py-2 bg-gray-200 border rounded-md hover:bg-gray-300'
        type='button'
        onClick={logoutSubmitHandler}
      >
        Logout
      </button>
    </div>
  );
};
export default UserBoard;
