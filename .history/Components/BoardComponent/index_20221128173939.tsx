import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
import { useContext } from 'react';
import { ProjectDataContext } from '../../lib/hooks/useDataContext';

const BoardComponent = () => {
  const dataContext = useContext(ProjectDataContext);
  console.log(dataContext);
  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <section className='flex flex-row items-start gap-4'>
        <Card />
        <AddCard />
      </section>
    </div>
  );
};

export default BoardComponent;
