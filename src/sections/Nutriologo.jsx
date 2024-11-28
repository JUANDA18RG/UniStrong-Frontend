import React from "react";
import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";
import WelcomePage from "../pages/Nutriologo/PresentacionNutriologo";
import AsignacionAlimentacion from "../pages/Nutriologo/AsignacionAlimentacion";
import SecciontipoAlimentacion from "../pages/Nutriologo/SecciontipoAlimentacion";

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
        <SecciontipoAlimentacion />
      </>
    </>
  );
}

export default Nutriologo;
