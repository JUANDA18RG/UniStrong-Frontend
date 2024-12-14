import Presentacion from "../pages/Administrador/Presentacion";
import Form from "../pages/Administrador/FormularioCreacionUser";
import State from "../pages/Administrador/userState";
import Asignacion from "../pages/Administrador/AsignacionEntrenador";


import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Bienvenido Señor Admin  |  ${CONFIG.appName}` };

const Inicio = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <Presentacion />
      <Form />
    
      <State />
      <Asignacion />
      
    </>
  );
};

export default Inicio;
