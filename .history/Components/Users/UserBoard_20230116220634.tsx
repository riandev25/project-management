import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  const { logoutSubmitHandler, isLogoutLoading } = useAuthLogout();
  return (
    <div className='flex flex-row justify-center w-full py-12'>
      <UserNavigation />
      <BoardList />
      <button type='button' onClick={logoutSubmitHandler}>
        {isLogoutLoading ? 'Logout process...' : 'Log out'}
      </button>
    </div>
  );
};
export default UserBoard;
