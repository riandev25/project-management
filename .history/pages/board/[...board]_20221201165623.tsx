import { ReactElement } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';
import BoardComponent from '../../components/BoardComponent';
import CardProvider from '../../lib/context/CardContext/cardProvider';
import FeatureProvider from '../../lib/context/FeatureContext/featureProvider';
import { DataContext } from '../../lib/context/DataContext/DataContext';
const Board: NextPageWithLayout = () => {
  let data = [
    {
      cardTitle: 'Backlog',
      cardChildren: [
        {
          childTitle:
            'Clicking the collection beneath a board should filter by collection, not open collections pop-over',
          desc: 'Paragpraph description',
          labels: [
            {
              id: 'meta-btn',
              name: 'Meta',
              bgColorStrip: 'bg-green-500',
              bgColor: 'bg-green-200 hover:bg-green-300',
              iconColor: 'text-green-500',
              isChecked: false,
            },
          ],
        },
      ],
    },
  ];

  return (
    <DataContext.Provider value={data}>
      <FeatureProvider>
        <CardProvider>
          <div className='flex flex-col w-full h-full pt-2 px-2 bg-[url("/images/bg-sea.jpg")] bg-cover'>
            <BoardComponent />
          </div>
        </CardProvider>
      </FeatureProvider>
    </DataContext.Provider>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
