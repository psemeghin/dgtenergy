// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#005F73" />
        </Head>
        <body className="min-h-svh bg-neutral-50 pt-10">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}