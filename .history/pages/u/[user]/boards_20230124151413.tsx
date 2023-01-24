import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = ({ cookie }: any) => {
  const router = useRouter();

  useEffect(() => {
    router.push('auth/login');
  });

  // if (cookie) {

  // } else {
  //   router.push('/auth/login');
  // }

  return <UserBoard />;
};

export default UserBoardsPage;

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const { cookie } = req.headers;

  if (cookie) {
    return {
      props: {
        cookie,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
