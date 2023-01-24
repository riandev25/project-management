import UserBoard from '../../../components/Users/UserBoard';
import { hasCookie, getCookies } from 'cookies-next';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = () => {
  console.log(getCookies());
  return <UserBoard />;
};

export default UserBoardsPage;
