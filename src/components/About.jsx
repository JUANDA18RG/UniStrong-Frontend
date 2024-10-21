import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  IconButton,
  Slide,
  Container,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion"; // Cambiado a "motion"
import { varBounce } from "./animate/variants/bounce"; // Asegúrate de que esto esté bien configurado
import { varFade } from "./animate/variants/fade";

// Imágenes para el carrusel y galería
import GymImage1 from "../assets/images/Grid8.jpg";
import GymImage2 from "../assets/images/Grid7.jpg";
import GymImage3 from "../assets/images/Grid6.jpg";
import GymImage4 from "../assets/images/Grid5.jpg";
import GymImage5 from "../assets/images/Grid4.jpg";
import GymImage6 from "../assets/images/Grid3.jpg";
import GymImage7 from "../assets/images/Grid2.jpg";
import GymImage8 from "../assets/images/Grid1.jpg";
import GymImage9 from "../assets/images/Grid12.jpg";
import GymImage10 from "../assets/images/Grid10.jpg";

import Logo from "../assets/images/Logo1.png";

import { CONFIG } from "../config-global";

import { Helmet } from "react-helmet-async";

const metadata = { title: `Sobre nosotros |  ${CONFIG.appName}` };

const images = [GymImage1, GymImage2, GymImage3, GymImage7, GymImage8]; // A

const descriptions = [
  "¡Bienvenido a UniStrong! Aquí encontrarás el mejor equipo para entrenar.",
  "Regístrate y accede a nuestras rutinas personalizadas.",
  "Inicia sesión para ver tu progreso y estadísticas.",
  "Clases grupales y entrenamiento personalizado para todos.",
  "Accede a nuestra nueva área de cardio y quema calorías rápidamente.",
];

function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState("left");

  const maxSteps = images.length;

  const handleNext = () => {
    setDirection("left");
    setSlideIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
      setSlideIn(true);
    }, 300);
  };

  const handleBack = () => {
    setDirection("right");
    setSlideIn(false);
    setTimeout(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
      );
      setSlideIn(true);
    }, 300);
  };

  // useEffect para cambiar automáticamente las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3000 ms = 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={varFade().in}
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          minHeight={{ xs: "calc(100vh )", sm: "calc(100vh)" }}
          sx={{
            backgroundColor: "cultured.main",
            padding: { xs: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl" sx={{ padding: 2, mt: 9 }}>
            <Grid container spacing={2}>
              {/* Carrusel en la esquina superior izquierda */}
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={3}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <Box sx={{ position: "relative", height: 420 }}>
                    <Slide
                      direction={direction}
                      in={slideIn}
                      mountOnEnter
                      unmountOnExit
                    >
                      <img
                        src={images[activeStep]}
                        alt={`Gym slide ${activeStep + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Slide>
                    {/* Frase superpuesta sobre la imagen */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: 2,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontSize: 30 }}
                      >
                        {descriptions[activeStep]}
                      </Typography>
                    </Box>

                    {/* Controles del carrusel */}
                    <IconButton
                      onClick={handleBack}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: 5,
                        width: 60,
                        height: 60,
                        fontSize: 30,
                        padding: 1,
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        "&:hover": {
                          backgroundColor: "redRYB.main",
                        },
                        transform: "translateY(-50%)",
                      }}
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: 5,
                        color: "#fff",
                        width: 60, // Aumenta el ancho del botón
                        height: 60, // Aumenta la altura del botón
                        fontSize: 30,
                        padding: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        "&:hover": {
                          backgroundColor: "redRYB.main",
                        },
                        transform: "translateY(-50%)",
                      }}
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
              {/* Otras imágenes en la galería */}

              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 200,
                    marginBottom: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={GymImage5}
                    alt={GymImage5}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 200,
                    marginBottom: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={GymImage4}
                    alt={GymImage4}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 200,
                    marginBottom: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={GymImage6}
                    alt={GymImage6}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={varBounce().in}
                >
                  <Paper
                    sx={{
                      overflow: "hidden",
                      borderRadius: 2,
                      height: 135,
                      marginBottom: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "black.main",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={Logo}
                        alt="Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "30%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="center"
                        component="h1"
                        color="redRYB.main"
                        sx={{
                          fontSize: {
                            xs: "1.5rem", // Tamaño de fuente más pequeño en pantallas pequeñas
                            sm: "2rem", // Tamaño de fuente más grande en pantallas medianas
                            md: "2.5rem", // Tamaño de fuente más grande en pantallas grandes
                          },
                          textAlign: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          marginY: 3, // Agrega margen arriba y abajo
                        }}
                      >
                        UniStrong
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 350,
                    marginBottom: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={GymImage9}
                    alt={GymImage9}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    height: 350,
                    marginBottom: 2,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={GymImage10}
                    alt={GymImage10}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}></Grid>
            </Grid>
          </Container>
        </Stack>
      </motion.div>
    </>
  );
}

export default About;
