import Card from '../Card/Card';
import BoardHeader from './BoardHeader';

const BoardComponent = () => {
  return (
    <div className='flex flex-col'>
      <BoardHeader />
      <Card />
    </div>
  );
};

export default BoardComponent;
