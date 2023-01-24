import UserBoard from '../../../components/Users/UserBoard';
import { hasCookie } from 'cookies-next';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = () => {
  console.log(hasCookie('connect.sid'));
  return <UserBoard />;
};

export default UserBoardsPage;
