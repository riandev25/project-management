import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserBoardsPage = ({ cookie }: any) => {
  const router = useRouter();

  console.log(cookie);

  useEffect(() => {
    if (!cookie) router.push('/auth/login');
  }, [cookie, router]);

  useEffect(() => {
    const stringifiedEmail = String(localStorage.getItem('email'));
    const storedEmail = JSON.parse(stringifiedEmail);
    if (router.query.user !== storedEmail) {
      router.push(`u/${storedEmail}/boards`);
    }
  }, [router]);

  if (!cookie) {
    return;
  }

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
      props: {
        cookie: null,
      },
    };
  }
};
