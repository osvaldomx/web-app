import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

function HomePage() {
    useEffect(() => {
        Router.push("/login")
    });

    return (
    <>
        <Head>
            <title>Proyecto Ligas</title>
        </Head>

        <h1>
            ¡Bienvenido al gestor de ligas!
        </h1>
        <Link href="/login">
            <a>Iniciar sesión</a>
        </Link>
    </>
    );
}
  
export default HomePage;
  