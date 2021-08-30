import Link from 'next/link';

import Login from '../components/Login';

export default function LoginPage() {

    const openLoginModal = (ev) => {
        ev.preventDefault()
        setTimeout(function () {
            $('#loginModal').modal('show');
        }, 230)
    }

    return (
        <>
            <Login />
        </>
    )
  }