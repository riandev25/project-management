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
          <FeatureProvider>
            <Main />
            <NextScript />
            <div>
              <FeaturePortal />
            </div>
          </FeatureProvider>
        </body>
      </Html>
    );
  }
}
