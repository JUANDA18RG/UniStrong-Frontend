import {instance} from './axios.js';

// Registro
export const registerRequest = (userData) => instance.post(`/users/register`, userData);

// Login
export const LoginRequest = (userData) => instance.post(`/login`, userData);

// Verificar token
export const verifyTokenRequest = () => instance.get(`/verify`);

//loagout
export const logoutRequest = () => instance.post(`/logout`);
