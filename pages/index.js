import Link from 'next/link';
import Head from 'next/head';

function HomePage() {
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
        )
  }
  
  export default HomePage
  