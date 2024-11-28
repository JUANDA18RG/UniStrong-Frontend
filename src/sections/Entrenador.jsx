import React from "react";

import WelcomePage from "../pages/Entrenador/PresentacionEntrenador";
import Horario from "../pages/Entrenador/HorarioAsignacion";
import CrearRutina from "../pages/Entrenador/CrearRutina";

import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Bienvenido entrenador |  ${CONFIG.appName}` };

function Entrenador() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <WelcomePage />
      <Horario />
      <CrearRutina />
    </>
  );
}

export default Entrenador;
