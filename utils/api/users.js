const users = (instance) => {
    const services = {};

    services.signin = (email, password) => {
        const payload = {
            email,
            password
        };
        return instance.post("usuario/login", payload)
    };

    services.getProfile = (token) => instance.get("usuario/perfil", {
        headers: {
            Authorization: token
        }
    });

    return services;
}

export default users;