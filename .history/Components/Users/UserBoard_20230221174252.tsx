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
        className='absolute top-4 right-4 bg-gray-300 p-2'
        type='button'
        onClick={logoutSubmitHandler}
      >
        Logout
      </button>
    </div>
  );
};
export default UserBoard;
