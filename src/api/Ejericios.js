import { Ejercicios , instance} from "./axios";

export const TraerEjercicios = () => Ejercicios.get(`/exercises`);

export const RutinasCreate = (data) => instance.post(`/routines/create`, data);

export const ObtenerRutinas = () => instance.get(`/routines/`, );


