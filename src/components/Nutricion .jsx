import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#800080", "#008000", "#FFFF00"];

const NutritionPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={180}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

const DietPlanCard = ({ plan }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      boxShadow: 4,
      transition: "0.3s",
      "&:hover": { boxShadow: 8, transform: "scale(1.05)" },
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={plan.image}
      alt={plan.title}
    />
    <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        {plan.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        {plan.description}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <NutritionPieChart data={plan.chartData} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "redRYB.main",
          "&:hover": { backgroundColor: "#b71c1c" },
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        Ver Más
      </Button>
    </CardContent>
  </Card>
);

const dietPlans = [
  {
    title: "Masa Muscular",
    description:
      "Dieta alta en proteínas y carbohidratos para aumentar masa muscular.",
    image: "https://i.blogs.es/346b57/hidratos/1366_2000.jpeg",
    chartData: [
      { name: "Proteínas", value: 40 },
      { name: "Carbohidratos", value: 35 },
      { name: "Grasas", value: 25 },
    ],
  },
  {
    title: "Pérdida de Peso",
    description: "Dieta equilibrada enfocada en la pérdida de grasa.",
    image:
      "https://www.gwhospital.com/sites/gwhospital.com/files/foods-lose-weight-800x600.jpg",
    chartData: [
      { name: "Proteínas", value: 30 },
      { name: "Carbohidratos", value: 40 },
      { name: "Grasas", value: 30 },
    ],
  },
];

function NutritionSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, textAlign: "center" }}>
      <Box mt={4} mb={4} textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "redRYB.main",
            fontSize: "2.5rem",
            mt: 5,
          }}
        >
          Sección de Nutrición
        </Typography>
        <Typography
          variant="subtitle1"
          color="common.main"
          sx={{ fontSize: "1.2rem", mb: 4 }}
        >
          Optimiza tu rendimiento físico con planes nutricionales
          personalizados, recetas saludables y consejos.
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={4}>
          {dietPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <DietPlanCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Consejos de Nutrición */}
      <Box mt={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "redRYB.main", fontWeight: 600, mb: 3 }}
        >
          Consejos Nutricionales
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{ padding: 2, boxShadow: 4, "&:hover": { boxShadow: 8 } }}
            >
              <Typography
                variant="h6"
                sx={{ color: "common.main", fontWeight: 600 }}
              >
                Bebe suficiente agua
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Mantente hidratado bebiendo al menos 8 vasos de agua al día.
                Esto ayuda en el rendimiento físico y en la recuperación
                muscular.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{ padding: 2, boxShadow: 4, "&:hover": { boxShadow: 8 } }}
            >
              <Typography
                variant="h6"
                sx={{ color: "common.main", fontWeight: 600 }}
              >
                Come más proteínas
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Consumir proteínas en cada comida es esencial para el desarrollo
                muscular y la recuperación tras los entrenamientos.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Recetas Saludables */}
      <Box mt={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "redRYB.main", fontWeight: 600, mb: 3 }}
        >
          Recetas Saludables
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { boxShadow: 8 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200"
                alt="Receta"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Ensalada de Pollo
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  Una ensalada deliciosa y saludable, perfecta para la hora de
                  la comida.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { boxShadow: 8 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200"
                alt="Receta"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Batido Proteico
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  Batido de proteínas ideal para después de tus entrenamientos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default NutritionSection;
