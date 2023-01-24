import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = ({ user }: any) => {
  console.log(user);
  // console.log(getCookies());
  // const cookies = parseCookies();
  // console.log({ cookies });
  return <UserBoard />;
};

export default UserBoardsPage;

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const user = req;

  return {
    props: {
      user,
    },
  };
};
