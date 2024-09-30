import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
} from "@mui/material";

// Datos de ejemplo para planes de dieta, consejos y recetas
const dietPlans = [
  {
    title: "Plan de Dieta para Ganar Masa Muscular",
    description:
      "Un plan de dieta diseñado para ayudarte a ganar masa muscular de manera efectiva.",
    image: "ruta/a/imagenDieta1.jpg",
  },
  {
    title: "Plan de Dieta para Perder Peso",
    description:
      "Un plan de dieta equilibrado para ayudarte a perder peso de manera saludable.",
    image: "ruta/a/imagenDieta2.jpg",
  },
];

const nutritionTips = [
  {
    title: "Consejo 1",
    description:
      "Bebe al menos 8 vasos de agua al día para mantenerte hidratado.",
  },
  {
    title: "Consejo 2",
    description:
      "Incluye proteínas en cada comida para ayudar a la recuperación muscular.",
  },
];

const healthyRecipes = [
  {
    title: "Receta de Ensalada de Pollo",
    description: "Una ensalada de pollo saludable y deliciosa.",
    image: "ruta/a/imagenReceta1.jpg",
  },
  {
    title: "Receta de Batido de Proteínas",
    description:
      "Un batido de proteínas perfecto para después del entrenamiento.",
    image: "ruta/a/imagenReceta2.jpg",
  },
];

function Nutricion() {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Sección de Nutrición
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Encuentra planes de dieta, consejos nutricionales y recetas saludables
          para mejorar tu rendimiento.
        </Typography>

        {/* Planes de Dieta */}
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Planes de Dieta
          </Typography>
          <Grid container spacing={2}>
            {dietPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={plan.image}
                    alt={plan.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{plan.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {plan.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Consejos Nutricionales */}
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Consejos Nutricionales
          </Typography>
          <Grid container spacing={2}>
            {nutritionTips.map((tip, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ padding: 2 }}>
                  <Typography variant="h6">{tip.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tip.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recetas Saludables */}
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Recetas Saludables
          </Typography>
          <Grid container spacing={2}>
            {healthyRecipes.map((recipe, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{recipe.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {recipe.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Nutricion;
