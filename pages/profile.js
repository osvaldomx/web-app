import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import cookies from 'next-cookies';
import api from 'utils/api/api';

const Profile = (props) => {
    const [dataUser, setDataUser] = useState({})
    const [mobileOpen, setMobileOpen] = useState(false)

    const appRoutes = [
        {
            path: "/profile",
            name: "Dashboard",
            icon: "Dashboard",
            layout: "/profile"
        },
        {
            path: "/user-data",
            name: "Perfil",
            icon: "Person",
            layout: "/user"
        }
    ];

    const getData = async () => {
        var allCokies = cookies(props);
        const user = await api.users.getProfile(allCokies.authtoken);
        setDataUser(user.data.data)
        console.log(user.data.data)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <h1>
            ¬°Bienvenido {dataUser.nombre}!
        </h1>
    );
}

export default Profile;