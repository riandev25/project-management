import type { ReactElement } from 'react';
import BoardHeader from '../../components/BoardHeader';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';

const Board: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col w-full h-full pt-2 px-2 bg-gray-700'>
      <BoardHeader />
    </main>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
