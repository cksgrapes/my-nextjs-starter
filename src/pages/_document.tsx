import Document, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="format-detection" content="telephone=no" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
