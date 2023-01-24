import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { useRouter } from 'next/router';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = ({ cookie }: any) => {
  const router = useRouter();
  if (cookie) {
    return <UserBoard />;
  } else {
    router.push('auth/login');
  }
};

export default UserBoardsPage;

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const { cookie } = req.headers;

  return {
    props: {
      cookie,
    },
  };
};
