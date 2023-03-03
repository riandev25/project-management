import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment, ReactElement, ReactNode, useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log(`Running on ${process.env.NODE_ENV} mode`);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // const queryClient = new QueryClient();
  // const [queryClient] = useState(() => new QueryClient());

  return getLayout(
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
