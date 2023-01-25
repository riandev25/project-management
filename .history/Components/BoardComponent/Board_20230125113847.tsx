import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
import { ProjectData } from '../../interfaces/data';
import { useContext } from 'react';
import { DataContext } from '../../lib/context/DataContext/DataContext';
import { useGetLists } from '../../lib/hooks/list/useGetLists';
import { useRouter } from 'next/router';

const BoardComponent = () => {
  const data = useContext(DataContext);

  const router = useRouter();

  console.log(router);

  const { data: datas, isSuccess } = useGetLists();

  if (isSuccess) console.log(datas);

  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <ul className='flex flex-row items-start gap-4'>
        {data.map(({ cardTitle, cardChildren }: ProjectData) => {
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
