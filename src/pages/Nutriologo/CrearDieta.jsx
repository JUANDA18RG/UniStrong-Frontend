import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo1.png"; // Asegúrate de tener esta imagen en tu proyecto
import { useSnackbar } from "notistack"; // Importación correcta

function CrearDieta() {
  const { enqueueSnackbar } = useSnackbar(); // Llamar a useSnackbar para mostrar notificaciones

  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    startDate: "",
    duration: "",
    mealsPerDay: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
    specialNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
  
    const nutritionistId = 1; // ID del nutricionista
  
    const dietData = {
      name: form.name,
      description: form.description,
      type: form.type,
      nutritionistId: nutritionistId,
    };
  
    try {
      const response = await fetch("http://localhost:3001/diet/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dietData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Dieta creada:", result);
  
        // Mostrar un mensaje de éxito usando enqueueSnackbar
        enqueueSnackbar("Dieta creada con éxito", { variant: "success" });
  
        // Recargar la página para mostrar los cambios
        window.location.reload();
      } else {
        console.error("Error al crear la dieta");
  
        // Mostrar un mensaje de error usando enqueueSnackbar
        enqueueSnackbar("Error al crear la dieta", { variant: "error" });
      }
    } catch (error) {
      console.error("Error de conexión:", error);
  
      // Mostrar un mensaje de error de conexión
      enqueueSnackbar("Error de conexión", { variant: "error" });
    }
  };
  

  const usuarios = ["Usuario 1", "Usuario 2", "Usuario 3"];

  const handleSelectChange = (e) => {
    setForm({ ...form, usuario: e.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "cultured.main",
        p: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          p: 2,
        }}
      >
        <motion.img
          src={
            "https://blog.smartfit.com.mx/wp-content/uploads/2019/11/SF_NOV19_BLOG_DIA_28-1024x853.png"
          }
          alt="Nutriólogo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          height: "100vh",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "600px",
            p: 4,
            boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
            borderRadius: "16px",
            backgroundColor: "white",
            overflow: "auto",
            maxHeight: "100%",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                padding: "10px",
                border: "5px solid #ff0000",
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "redRYB.main", mt: 2 }}
            >
              Crear Dieta
            </Typography>
            <Typography variant="subtitle1">
              Crea un plan de alimentación personalizado para un paciente
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Nombre de la Dieta"
                type="text"
                fullWidth
                name="name"
                value={form.name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Descripción"
                type="text"
                fullWidth
                name="description"
                value={form.description}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="type-label">Tipo</InputLabel>
                <Select
                  labelId="type-label"
                  value={form.type}
                  label="Tipo"
                  name="type"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Vegana">Vegana</MenuItem>
                  <MenuItem value="Vegetariana">Vegetariana</MenuItem>
                  <MenuItem value="Omnívora">Omnívora</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Otros campos para las comidas y notas especiales, que no cambian */}
            <Grid item xs={12}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "redRYB.main",
                  "&:hover": {
                    backgroundColor: "redPigment.main",
                  },
                }}
              >
                Crear Dieta
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default CrearDieta;
