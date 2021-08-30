import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" 
                    content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
  }
  