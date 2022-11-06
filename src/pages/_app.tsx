import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@tn/styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/tn-logo.png" type="image/x-icon" />

        <title>Trung Nguyen Fullstack</title>

        <meta name="title" content="Trung Nguyen Fullstack" />
        <meta name="description" content="Trung Nguyen Profile" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
