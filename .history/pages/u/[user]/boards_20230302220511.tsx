import UserBoard from '../../../components/Users/UserBoard';
import { useRouter } from 'next/router';

const UserBoardsPage = () => {
  const router = useRouter();
  console.log(router);

  return <UserBoard />;
};

export default UserBoardsPage;
