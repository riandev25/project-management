import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../../../lib/utils/localStorage';

const UserBoardsPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = getLocalStorage('jwtToken');
    const email = getLocalStorage('email');
    if (!jwtToken) {
      router.push('/auth/login');
    } else if (email !== router.query.user) {
      router.push('/404');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) return <p></p>

  return <UserBoard />;
};

export default UserBoardsPage;
