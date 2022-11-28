import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='relative'>
          <Main />
          <div id='myportal' className='absolute top-1/2 left-1/2' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
