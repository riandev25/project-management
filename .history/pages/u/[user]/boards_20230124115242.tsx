import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = () => {
  // console.log(getCookies());
  const cookies = parseCookies();
  console.log({ cookies });
  return <UserBoard />;
};

export default UserBoardsPage;
