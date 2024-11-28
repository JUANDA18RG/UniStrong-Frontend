import axios from "axios";


const Ruta = import.meta.env.VITE_REACT_APP_RAPID_API_KEY
const Hots = import.meta.env.VITE_REACT_APP_RAPID_API_HOST

const instance = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
});

const Ejercicios = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
    headers: {
      'x-rapidapi-key': Ruta,
      'x-rapidapi-host': Hots,
    }
});


export { instance, Ejercicios };