import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment, ReactElement, ReactNode } from 'react';
import { DataContext } from '../lib/context/DataContext/DataContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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

  return getLayout(
    <Fragment>
      <DataContext.Provider value={data}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </Fragment>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default MyApp;
