import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { varBounce } from "../../components/animate/variants/bounce";
import { varFade } from "../../components/animate/variants/fade";
import Banner from "../../assets/images/Grid4.jpg";
import { useAuth } from "../../context/authContext";

function WelcomePage() {
  const { User } = useAuth();

  return (
    <Box>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={varFade().in}
      >
        <Box
          minHeight={{ xs: "calc(100vh)", sm: "calc(100vh)" }}
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
            variants={varBounce().in}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h2" component="h1" gutterBottom>
                ¡Bienvenido a UniStrong Administrador,{" "}
                <Typography
                  variant="h2"
                  component="span"
                  sx={{ color: "redRYB.main" }}
                >
                  {User.username}
                </Typography>
                !
              </Typography>
              <Typography variant="h5">
                Aqui podras gestionar los usuarios de la plataforma
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default WelcomePage;
