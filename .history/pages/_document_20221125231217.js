import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='relative'>
          <Main />
          {/* <div
            id='myportal'
            className='absolute top-0 left-0 flex justify-center items-center w-screen min-h-screen'
          /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
