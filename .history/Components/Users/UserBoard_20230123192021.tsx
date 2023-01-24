import { useQuery } from '@tanstack/react-query';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import UserService from '../../services/userService';
import { authLoginStore } from '../../store/authStore';
import { shallow } from 'zustand/shallow';
import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  const { logoutSubmitHandler, isLogoutLoading } = useAuthLogout();

  return (
    <div className='relative flex flex-row justify-center w-full py-12'>
      <UserNavigation />
      <BoardList />
      <button
        className='absolute top-4 right-4 bg-gray-300 p-2'
        type='button'
        onClick={logoutSubmitHandler}
      >
        {isLogoutLoading ? 'Logout process...' : 'Log out'}
      </button>
    </div>
  );
};
export default UserBoard;
