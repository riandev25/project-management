import { ReactElement } from 'react';
import Layout from '../../components/Layout';

const Board = () => {
  return <div className='w-full h-full'>asd</div>;
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
