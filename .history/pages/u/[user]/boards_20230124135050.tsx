import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = ({ cookies }: any) => {
  console.log(cookie);
  // console.log(getCookies());
  // const cookies = parseCookies();
  // console.log({ cookies });
  return <UserBoard />;
};

export default UserBoardsPage;

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const { cookies } = req.headers;

  return {
    props: {
      cookies,
    },
  };
};
