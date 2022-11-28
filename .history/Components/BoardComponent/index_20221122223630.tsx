import Card from '../Card/Card';
import BoardHeader from './BoardHeader';

const BoardComponent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <section>
        <Card />
      </section>
    </div>
  );
};

export default BoardComponent;
