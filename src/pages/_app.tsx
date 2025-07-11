import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import ToastProvider from '@tn/store/ToastContext'
import '@tn/styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/tn-logo.png" type="image/x-icon" />

        <title>Trung Nguyen Fullstack</title>

        <meta name="title" content="TrungNguyen's Portfolio" />
        <meta name="description" content="Pham Trung Nguyen Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TrungNguyen's Portfolio" />
        <meta property="og:description" content="Pham Trung Nguyen Portfolio" />
        <meta property="og:image" content="/avatar.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TrungNguyen's Portfolio" />
        <meta name="twitter:description" content="Pham Trung Nguyen Portfolio" />
        <meta name="twitter:image" content="/avatar.png" />
      </Head>

      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>

      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig)
