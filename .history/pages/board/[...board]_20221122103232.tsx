import type { ReactElement } from 'react';
import BoardHeader from '../../components/BoardHeader';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';

const Board: NextPageWithLayout = () => {
  return (
    <main className='w-full h-full'>
      <BoardHeader />
    </main>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
