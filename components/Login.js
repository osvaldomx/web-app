import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <main className={styles.formSignin}>
            <form onSubmit={(ev) => sendFormLogin(ev)}>
                <Image
                    src="/img/logo.png"
                    width={80}
                    height={80}
                    alt="Proyecto Ligas"
                    className=""
                />
                <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="Email" placeholder="correo@ejemplo.com" />
                    <label htmlFor="Email">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="Password" placeholder="Contraseña" />
                    <label htmlFor="Password">Password</label>
                </div>
                <div className={`${styles.checkbox} mb-3`}>
                    <label>
                        <input type="checkbox" value="remember-me" /> Recordarme
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                <div className="mt-5 mb-3">
                    <Link href="/">
                        <a>Página inicial</a>
                    </Link>
                </div>
                <p className="mt-5 mb-3 text-muted">© Todos los derechos rervados 2021</p>
            </form>
            <style jsx global>{`
                html, body, #__next{
                    display: grid;
                    height: 100%;
                }
                body {
                    align-items: center;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    background-color: #f5f5f5;
                }
            `}</style>
        </main>
    )
}