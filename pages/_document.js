import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="/fonts/linearicons_coders/css/linearicons.css" />
      </Head>
      <body className="overflow-scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
