import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';
import BoardComponent from '../../components/BoardComponent';
import CardProvider from '../../lib/context/CardContext/cardProvider';

const Board: NextPageWithLayout = () => {
  return (
    <CardProvider>
      <div className='flex flex-col w-full h-full pt-2 px-2 bg-[url("/images/bg-sea.jpg")] bg-cover'>
        <BoardComponent />
      </div>
      {/* {isFeatureOpen && (
        <div
          id='myportal'
          className='absolute top-0 left-0 flex justify-center items-center w-screen min-h-screen'
        />
      )} */}
    </CardProvider>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
