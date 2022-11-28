import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useContext, Fragment, ReactElement, ReactNode } from 'react';
import { useFeatureContext } from '../lib/hooks/useFeatureContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const { FeatureState } = useContext(useFeatureContext);
  const { isFeatureOpen } = FeatureState;

  return getLayout(
    <Fragment>
      <Component {...pageProps} />
      {isFeatureOpen && (
        <div
          id='myportal'
          className='absolute top-0 left-0 flex justify-center items-center w-screen min-h-screen'
        />
      )}
    </Fragment>
  );
}
