import { ReactElement, useReducer } from 'react';
import Layout from '../../components/Layout';
import type { NextPageWithLayout } from '../_app';
import BoardComponent from '../../components/BoardComponent';
import CardProvider from '../../lib/context/CardContext/cardProvider';
import {
  FeatureContext,
  FeatureProvider,
} from '../../lib/context/FeatureContext/featureProvider';
import { DataContext } from '../../lib/context/DataContext/DataContext';
import featureReducer from '../../lib/context/FeatureContext/featureReducer';
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
              id: 'Meta-btn',
              name: 'Meta',
              bgColorStrip: 'bg-green-400',
              bgColor: 'bg-green-300',
              bgColorHover: 'hover:bg-green-400',
              iconColor: 'text-green-500',
              isChecked: false,
              isOpen: false,
            },
            {
              id: 'Bugs-btn',
              name: 'Bugs',
              bgColorStrip: 'bg-red-400',
              bgColor: 'bg-red-300',
              bgColorHover: 'hover:bg-red-400',
              iconColor: 'text-red-500',
              isChecked: false,
              isOpen: false,
            },
          ],
          checklist: [
            {
              title: 'Checklist',
              percentage: 0,
              checkListData: [
                {
                  description: 'Determine appropriate naming scheme (Due 8/9)',
                  isChecked: false,
                },
                {
                  description: 'Fix a bug (Due 9/9)',
                  isChecked: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const featureData = [
    {
      id: 'feature-modal',
      isOpen: false,
    },
    {
      id: 'members-option',
      isOpen: false,
    },
    {
      id: 'labels-option',
      isOpen: false,
    },
    {
      id: 'labels-sub-option',
      isOpen: false,
    },
    {
      id: 'checklist-option',
      isOpen: false,
    },
    {
      id: 'dates-option',
      isOpen: false,
    },
    {
      id: 'attachment-option',
      isOpen: false,
    },
    {
      id: 'cover-option',
      isOpen: false,
    },
  ];

  const [featureState, dispatchFeature] = useReducer(
    featureReducer,
    featureData
  );

  return (
    <DataContext.Provider value={data}>
      {/* <FeatureProvider> */}
      <FeatureContext.Provider value={{ featureState, dispatchFeature }}>
        <CardProvider>
          <div className='flex flex-col w-full h-full pt-2 px-2 bg-[url("/images/bg-sea.jpg")] bg-cover'>
            <BoardComponent />
          </div>
        </CardProvider>
      </FeatureContext.Provider>
      {/* </FeatureProvider> */}
    </DataContext.Provider>
  );
};

Board.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Board;
