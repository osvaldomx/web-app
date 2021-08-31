import axios from 'axios';
import users from './users';

const api = {};

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    }
});

api.users = users(instance);

export default api;