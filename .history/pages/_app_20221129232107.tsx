import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment, ReactElement, ReactNode } from 'react';
import { ProjectDataContextProvider } from '../lib/hooks/useDataContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

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
              isChecked: true,
            },
          ],
        },
      ],
    },
  ];

  return getLayout(
    <Fragment>
      <ProjectDataContextProvider value={data}>
        <Component {...pageProps} />
      </ProjectDataContextProvider>
    </Fragment>
  );
}
