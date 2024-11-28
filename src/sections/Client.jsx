import Presentacion from "../pages/Client/Presentacion";
import Calendar from "../pages/Client/Horario";
import Ejercicios from "../pages/Client/Ejercicios";
import Nutricion from "../components/Nutricion ";

import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Bienvenido  |  ${CONFIG.appName}` };

const Inicio = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <Presentacion />
      <Calendar />
      <Ejercicios />
      <Nutricion />
    </>
  );
};

export default Inicio;
