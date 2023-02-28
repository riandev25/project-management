import { ReactElement } from 'react';
import Layout from '../../../components/Layout';
import type { NextPageWithLayout } from '../../_app';
import BoardComponent from '../../../components/BoardComponent/Board';
import { useRouter } from 'next/router';
const Board: NextPageWithLayout = ({ cookie }: any) => {
  const router = useRouter();

  if (!cookie) router.push('/auth/login');

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

export const getServerSideProps = (ctx: any) => {
  const { req } = ctx;
  const { cookie } = req.headers;

  if (cookie) {
    return {
      props: {
        hasCookie: true,
      },
    };
  } else {
    return {
      props: {
        hasCookie: false,
      },
    };
  }
};
