import {instance} from './axios.js';
import Cookies from 'js-cookie';

//Obtener los datos
export const obtenerDatosRequest = (id) => instance.get(`/client/ByUser/${id}`,);
    
//Editar informacion personal
export const actualizarDatosRequest  = (informacion) => {  
  const token = Cookies.get('token');
  return instance.put(    
    `/client/edit_perfil_client`, 
    informacion,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
   }
  ); 
};

//Editar datos fisicos
export const actualizarDatosFisicosRequest  = (iduser, informacion) => {
  return instance.post(    
    `/user/editar_medidas/${iduser}`, 
    informacion
  ); 
};