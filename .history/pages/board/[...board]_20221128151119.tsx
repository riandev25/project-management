import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';
import BoardComponent from '../../components/BoardComponent';
import CardProvider from '../../lib/context/CardContext/cardProvider';
import FeatureProvider from '../../lib/context/FeatureContext/featureProvider';
import { ProjectDataContext } from '../../lib/hooks/useDataContext';
import { useContext } from 'react';
const Board: NextPageWithLayout = () => {
  const dataContext = useContext(ProjectDataContext);

  let data = [
    {
      title: 'Backlog',
      children: [
        {
          title:
            'Clicking the collection beneath a board should filter by collection, not open collections pop-over',
          desc: 'Paragpraph description',
          labels: [
            {
              id: 'meta-btn',
              name: 'Meta',
              bgColor: 'bg-green-200 hover:bg-green-300',
              iconColor: 'bg-green-500',
            },
          ],
        },
      ],
    },
  ];
  console.log(data);
  // dataContext.setData(data);
  // console.log(dataContext.data);

  return (
    <FeatureProvider>
      <CardProvider>
        <div className='flex flex-col w-full h-full pt-2 px-2 bg-[url("/images/bg-sea.jpg")] bg-cover'>
          <BoardComponent />
        </div>
      </CardProvider>
    </FeatureProvider>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
