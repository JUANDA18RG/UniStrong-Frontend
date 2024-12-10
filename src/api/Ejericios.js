import { Ejercicios , instance} from "./axios";
import Cookies from 'js-cookie';

export const TraerEjercicios = () => Ejercicios.get(`/exercises`);

export const RutinasCreate = (data) => instance.post(`/routines/create`, data);

export const ObtenerRutina = (id) => instance.get(`/routines/coach/${id}`, );

export const ObtenerUsuarios = () => instance.get(`/client/`, );

export const AsignarRutina = (data) => instance.post(`/routines/assignByEmail`, data);

export const TraerRutinadeeEntrenador = (id) => instance.get(`/routines/coach/${id}`, );

export const TraerRutinasUsuario = (id) => instance.get(`/routines/client/${id}`, );

export const diasDeMembresia = (userId) => {
    return instance.post('/membership/remainingDays', { userId } );
  };
    
  



  