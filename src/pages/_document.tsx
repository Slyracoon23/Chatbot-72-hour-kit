import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { resetIdCounter } from "react-tabs";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    resetIdCounter(); // This for React-Tab package to work properly in NextJS
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="selection:bg-primary-color selection:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
