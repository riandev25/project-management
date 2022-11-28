import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import FeatureProvider from '../lib/context/FeatureContext/featureProvider';
import FeaturePortal from '../lib/portal/FeaturePortal';

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
            className='absolute top-1/2 left-1/2 flex justify-center items-center'
          />
        </body>
      </Html>
    );
  }
}
