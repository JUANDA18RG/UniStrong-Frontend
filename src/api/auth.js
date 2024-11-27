import {instance} from './axios.js';
import Cookies from 'js-cookie';

// Registro
export const registerRequest = (userData) => instance.post(`/user/register`, userData);

// Login
export const LoginRequest = (userData) => instance.post(`/user/login`, userData);

// Verificar token
export const verifyTokenRequest = () => instance.get(`/user/verify`);

//loagout
export const logoutRequest = () => instance.post(`/user/logout`);

//Desactivar cuenta 
export const deactivateAccountRequest = (password) => {  
  const token = Cookies.get('token');   
  return instance.post(    
    `/user/disable-account/${token}`,
    { password },  
  ); 
};

//Completar formulario, primera vez que se loguea
export const completarFormRequest = (formdata) => {  
  const token = Cookies.get('token');
  return instance.post(    
    `/client/register`, 
    formdata,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
   }
  ); 
};

//Elegir membresia
export const membresiaRequest = (idMembership) => {
  const token = Cookies.get('token');
  console.log (token);
  return instance.put(
    `/client/update_membership`,
    { idMembership },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  );
};










