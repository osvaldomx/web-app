import App from 'next/app';
import React from 'react';
import Head from 'next/head';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/dashboard.css';

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    MyApp.getInitialProps = async (ctx) => {
        const appProps = await App.getInitialProps(ctx);
      
        return {
            ...appProps
        };
    }
    
    return getLayout(
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
  