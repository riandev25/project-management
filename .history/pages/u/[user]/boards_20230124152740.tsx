import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

// interface IUserBoardPage {
//   cookies: Cookie
// }

const UserBoardsPage = ({ cookie, error }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (error) router.push('/auth/login');
  });

  if (error) {
    return;
  }

  if (cookie) {
    return <UserBoard />;
  }
};

export default UserBoardsPage;

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const { cookie } = req.headers;

  try {
    return {
      props: {
        cookie,
      },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};
