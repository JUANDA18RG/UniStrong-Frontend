import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActionArea,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Banner from "../../assets/images/Grid4.jpg";
import { varFade } from "../../components/animate/variants/fade";
import { TraerEjercicios } from "../../api/Ejericios";

function Ejercicios() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await TraerEjercicios();
        setExercises(response.data);
      } catch (error) {
        console.error("Error al traer los ejercicios:", error);
      }
    };
    fetchExercises();
  }, []);

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
              padding: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
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
                  mt: 5,
                }}
              >
                Sección de Ejercicios
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Encuentra una variedad de ejercicios para mejorar tu condición
                física.
              </Typography>

              {/* Cartas de Ejercicios */}
              <Box>
                <Grid
                  container
                  spacing={5}
                  justifyContent="center"
                  sx={{ padding: 5 }}
                >
                  {exercises.map((exercise) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={exercise.id}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                          borderColor: "transparent",
                          backgroundColor: "#f4f4f9",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                          transition:
                            "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 12px 36px rgba(0, 0, 0, 0.3)",
                          },
                          position: "relative",
                        }}
                      >
                        <CardActionArea>
                          {/* Icono Temático */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              zIndex: 1,
                              backgroundColor: "redRYB.main",
                              borderRadius: "50%",
                              padding: "8px",
                            }}
                          >
                            <IconButton
                              aria-label="icon"
                              sx={{ color: "white", padding: 0 }}
                            >
                              <FitnessCenterIcon />
                            </IconButton>
                          </Box>
                          <CardMedia
                            component="img"
                            height="200"
                            image={exercise.gifUrl}
                            alt={exercise.name}
                            sx={{
                              borderTopLeftRadius: "16px",
                              borderTopRightRadius: "16px",
                            }}
                          />
                          <CardContent
                            sx={{
                              flexGrow: 1,
                              textAlign: "center",
                              backgroundColor: "cultured.main",
                            }}
                          >
                            <Typography
                              variant="h6"
                              gutterBottom
                              sx={{ fontWeight: "bold", color: "redRYB.main" }}
                            >
                              {exercise.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Parte del cuerpo: {exercise.bodyPart}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Objetivo: {exercise.target}
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
        </Box>
      </motion.div>
    </>
  );
}

export default Ejercicios;
