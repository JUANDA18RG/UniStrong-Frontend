import React from "react";
import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";
import WelcomePage from "../pages/Nutriologo/PresentacionNutriologo";
import AsignacionAlimentacion from "../pages/Nutriologo/CrearDieta";
import SecciontipoAlimentacion from "../pages/Nutriologo/SecciontipoAlimentacion";
import AsignarDieta from "../pages/Nutriologo/AsignarDieta";
import MostrasDieta from "../pages/Nutriologo/MostrarDieta";

const metadata = { title: `Bienvenido nutriologo |  ${CONFIG.appName}` };

function Nutriologo() {
  return (
    <>
      <>
        <Helmet>
          <title> {metadata.title}</title>
        </Helmet>
        <WelcomePage />
        <AsignacionAlimentacion />
        <AsignarDieta />
        <MostrasDieta />
        <SecciontipoAlimentacion />
      </>
    </>
  );
}

export default Nutriologo;
