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
          <div
            id='myportal'
            className='absolute top-12 flex justify-center items-center w-full'
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
