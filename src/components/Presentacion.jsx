import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { varBounce } from "./animate/variants/bounce";
import { varFade } from "./animate/variants/fade";
import Banner from "../assets/images/Grid1.jpg";

function WelcomePage() {
  const userName = "Juan"; // Reemplaza esto con el nombre del usuario real

  return (
    <Box>
      {/* Hero de Presentación */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={varFade().in} // Utilizando correctamente varBounce
      >
        <Box
          minHeight={{ xs: "calc(100vh - 70px)", sm: "calc(100vh - 80px)" }}
          sx={{
            position: "relative",
            width: "100%",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={varBounce().in} // Utilizando correctamente varBounce
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h2" component="h1" gutterBottom>
                ¡Bienvenido a UniStrong,{" "}
                <Typography
                  variant="h2"
                  component="span"
                  sx={{ color: "redRYB.main" }}
                >
                  {userName}
                </Typography>
                !
              </Typography>
              <Typography variant="h5">
                Aquí puedes ver tu progreso y acceder a todas las
                funcionalidades del gimnasio.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default WelcomePage;
