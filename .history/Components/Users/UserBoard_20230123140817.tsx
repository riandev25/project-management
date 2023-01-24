import { useQuery } from '@tanstack/react-query';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import UserService from '../../services/UserService';
import { useAuthLoginStore } from '../../store/authStore';
import { shallow } from 'zustand/shallow';
import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  const { logoutSubmitHandler, isLogoutLoading } = useAuthLogout();

  // const { apiKey } = useAuthLoginStore(
  //   (state) => ({
  //     apiKey: state.apiKey,
  //   }),
  //   shallow
  // );

  const userService = UserService();

  const { data } = useQuery({
    queryKey: ['boards-list'],
    queryFn: userService.getBoard,
  });

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
