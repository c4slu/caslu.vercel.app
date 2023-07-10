import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import favicon from '../../public/favicon.ico'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Caslu \\ Front-End Developer</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
  }
