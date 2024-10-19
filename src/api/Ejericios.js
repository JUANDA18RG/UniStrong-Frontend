import { Ejercicios } from "./axios";

export const TraerEjercicios = () => Ejercicios.get(`/exercises`);
