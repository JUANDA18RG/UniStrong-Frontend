import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActionArea,
} from "@mui/material";
import { motion } from "framer-motion";
import Banner from "../assets/images/Grid4.jpg";
import { varFade } from "./animate/variants/fade";

// Datos de ejemplo para los ejercicios
const exercises = [
  {
    title: "Sentadillas",
    description:
      "Un ejercicio fundamental para fortalecer las piernas y glúteos.",
    image: "ruta/a/imagenSentadillas.jpg",
  },
  {
    title: "Flexiones",
    description: "Un ejercicio excelente para trabajar el pecho y los tríceps.",
    image: "ruta/a/imagenFlexiones.jpg",
  },
  {
    title: "Abdominales",
    description: "Perfecto para fortalecer el core y mejorar la estabilidad.",
    image: "ruta/a/imagenAbdominales.jpg",
  },
  {
    title: "Burpees",
    description:
      "Un ejercicio completo que trabaja todo el cuerpo y mejora la resistencia.",
    image: "ruta/a/imagenBurpees.jpg",
  },
];

function Ejercicios() {
  return (
    <>
      {/* Hero de Ejercicios */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={varFade().in}
      >
        <Box
          minHeight="100vh"
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
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "redRYB.main",
                fontSize: "2.5rem",
              }}
            >
              Sección de Ejercicios
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Encuentra una variedad de ejercicios para mejorar tu condición
              física.
            </Typography>

            {/* Cartas de Ejercicios */}
            <Box mt={5}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ padding: 5 }}
              >
                {exercises.map((exercise, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={exercise.image}
                          alt={exercise.title}
                          sx={{
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" gutterBottom>
                            {exercise.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {exercise.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}

export default Ejercicios;
