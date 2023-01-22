import { useQuery } from '@tanstack/react-query';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import UserService from '../../services/UserService';
import { useAuthLoginStore } from '../../store/authStore';
import { shallow } from 'zustand/shallow';
import BoardList from './BoardList';
import UserNavigation from './UserNavigation';
import { useQueryData } from '../../lib/hooks/useFetchData';

const UserBoard = ({ user }: any) => {
  const { logoutSubmitHandler, isLogoutLoading } = useAuthLogout();
  console.log(user);

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

  // const {} = useQueryData({fetchService: userService.getBoard, queryKey:['boards-list']})

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
