import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
import { ProjectData } from '../../interfaces/data';
import { useContext } from 'react';
import { DataContext } from '../../lib/context/DataContext/DataContext';

const BoardComponent = () => {
  const dataContext = useContext(DataContext);
  console.log(dataContext);

  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <ul className='flex flex-row items-start gap-4'>
        {data.map(({ cardTitle, cardChildren }: Data) => {
          return (
            <li key={cardTitle}>
              <Card cardTitle={cardTitle} cardChildren={cardChildren} />
            </li>
          );
        })}

        <li>
          <AddCard />
        </li>
      </ul>
    </div>
  );
};

export default BoardComponent;
