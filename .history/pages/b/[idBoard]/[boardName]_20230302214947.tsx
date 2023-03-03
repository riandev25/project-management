import { ReactElement } from 'react';
import Layout from '../../../components/Layout';
import type { NextPageWithLayout } from '../../_app';
import BoardComponent from '../../../components/BoardComponent/Board';
const Board: NextPageWithLayout = () => {

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
