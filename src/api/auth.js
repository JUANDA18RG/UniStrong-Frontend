import {instance} from './axios.js';

// Registro
export const registerRequest = (userData) => instance.post(`/user/register`, userData);

// Login
export const LoginRequest = (userData) => instance.post(`/user/login`, userData);

// Verificar token
export const verifyTokenRequest = () => instance.get(`/user/verify`);

//loagout
export const logoutRequest = () => instance.post(`/user/logout`);



