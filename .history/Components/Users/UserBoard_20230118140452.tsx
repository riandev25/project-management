import { useQuery } from '@tanstack/react-query';
import { Props } from 'html-react-parser/lib/attributes-to-props';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import UserService from '../../services/UserService';
import { useAuthStore } from '../../store/authStore';
import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

export const getServerSideProps = (ctx: any) => {
  const user: any = ctx.req.session.user;
  return {
    props: {
      user,
    },
  };
};

const UserBoard = ({ user }: any) => {
  const { logoutSubmitHandler, isLogoutLoading } = useAuthLogout();
  console.log(user);

  const { apiKey } = useAuthStore();

  const userService = UserService(apiKey);

  const { refetch } = useQuery({
    queryKey: ['boards-list'],
    queryFn: userService.getBoard,
  });

  const a = refetch();

  console.log(a);
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