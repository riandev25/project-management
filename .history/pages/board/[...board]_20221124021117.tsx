import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';
import BoardComponent from '../../components/BoardComponent';
import { AddCardChildProvider } from '../../lib/hooks/s';

const Board: NextPageWithLayout = () => {
  return (
    <AddCardChildProvider>
      <main className='flex flex-col w-full h-full pt-2 px-2 bg-[url("/images/bg-sea.jpg")] bg-cover'>
        <BoardComponent />
      </main>
    </AddCardChildProvider>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
