import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment, ReactElement, ReactNode, useReducer } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataContext } from '../lib/context/DataContext/DataContext';
import { FeatureContext } from '../lib/context/FeatureContext/featureProvider';
import featureReducer from '../lib/context/FeatureContext/featureReducer';
import CardProvider from '../lib/context/CardContext/cardProvider';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = new QueryClient();

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
              id: 0,
              title: 'Checklist',
              percentage: 0,
              checklistItems: [
                {
                  id: 0,
                  description: 'Determine appropriate naming scheme (Due 8/9)',
                  isChecked: false,
                  isOptionOpen: false,
                },
                {
                  id: 1,
                  description: 'Fix a bug (Due 9/9)',
                  isChecked: false,
                  isOptionOpen: false,
                },
                {
                  id: 2,
                  description: 'Fix a bug (Due 8/9)',
                  isChecked: false,
                  isOptionOpen: false,
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

  return getLayout(
    <Fragment>
      {/* <DataContext.Provider value={data}>
        <FeatureContext.Provider value={{ featureState, dispatchFeature }}>
          <CardProvider> */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {/* </CardProvider>
        </FeatureContext.Provider>
      </DataContext.Provider> */}
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}

export default MyApp;
