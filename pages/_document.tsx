import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.png" rel="icon" />
        </Head>
        {process.env.NODE_ENV === "production" && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-10906656-5', 'auto');
          ga('send', 'pageview');
        `}
          </Script>
        )}
        <body>
          <Main />
          <NextScript />
        </body>

        <div id="portal"></div>
        <div id="root"></div>
      </Html>
    );
  }
}

export default MyDocument;
