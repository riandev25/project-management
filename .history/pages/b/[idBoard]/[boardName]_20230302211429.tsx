import { ReactElement } from 'react';
import Layout from '../../../components/Layout';
import type { NextPageWithLayout } from '../../_app';
import BoardComponent from '../../../components/BoardComponent/Board';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getLocalStorage } from '../../../lib/utils/localStorage';
const Board: NextPageWithLayout = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = getLocalStorage('jwtToken');
    const email = getLocalStorage('email');
    console.log(jwtToken);
    console.log(email);
    if (!jwtToken) {
      router.push('/auth/login');
    } else if (email !== router.query.user) {
      router.push('/404');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) return <p></p>;

  return (
    <div className='fixed flex flex-col w-full h-full pt-2 px-2 bg-gray-800 bg-cover'>
      <BoardComponent />
    </div>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
