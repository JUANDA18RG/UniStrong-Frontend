import { instance } from './axios.js';

// Solicitar el envío del código de recuperación
export const sendCodeRequest = (email) => 
  instance.post(`/verification/send-code`, email ); 

// Verificar el código de recuperación
export const verifyCodeRequest = (email, code) => 
  instance.put(`/verification/verify-code`, email, code ); 

// Cambiar la contraseña
export const changePasswordRequest = (email, password) => 
  instance.put(`/verification/change-password`, email, password ); 