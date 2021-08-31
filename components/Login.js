import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import api from '/utils/api/api';
import { useRef } from 'react';
import Router from 'next/router';

export default function Login() {

    const userEmail = useRef()
    const userPassword = useRef()

    const sendFormSignin = (ev) => {
        ev.preventDefault()
        
        try{
            const prom = api.users.signin(
                userEmail.current.value,
                userPassword.current.value
            ).then((response) => {
                document.cookie = `authtoken=${response.data.data.access_token}; Secure`;
                Router.push("/profile")
            });
        } catch (error){
            console.log(error)
        }
    }

    return (
        <main className={styles.formSignin}>
            <form onSubmit={(ev) => sendFormSignin(ev)}>
                <Image
                    src="/img/logo.png"
                    width={80}
                    height={80}
                    alt="Proyecto Ligas"
                    className=""
                />
                <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
                <div className="form-floating">
                    <input 
                        id="Email"
                        type="email"
                        className="form-control"
                        placeholder="correo@ejemplo.com"
                        ref={userEmail}/>
                    <label htmlFor="Email">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        id="Password"
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        ref={userPassword}/>
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