import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='relative'>
          <Main />
          <NextScript />
          <div
            id='myportal'
            className='absolute top-1/4 flex justify-center items-center w-full'
          />
        </body>
      </Html>
    );
  }
}
