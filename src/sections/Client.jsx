import Presentacion from "../components/Presentacion";
import Calendar from "../components/Horario";
import Ejercicios from "../components/Ejercicios";
import Nutricion from "../components/Nutricion ";

import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Dasboard |  ${CONFIG.appName}` };

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
