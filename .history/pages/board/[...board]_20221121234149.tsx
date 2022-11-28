import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';

const Board: NextPageWithLayout = () => {
  return <div className='w-full h-full'></div>;
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
