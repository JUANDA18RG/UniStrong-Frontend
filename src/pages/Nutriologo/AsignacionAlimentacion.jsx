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
import NutriologoImage from "../../assets/images/Grid2.jpg"; // Asegúrate de tener esta imagen en tu proyecto
import Logo from "../../assets/images/Logo1.png"; // Asegúrate de tener esta imagen en tu proyecto

function AsignacionAlimentacion() {
  const [form, setForm] = useState({
    patientName: "",
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

  const handleSubmit = () => {
    console.log("Plan de alimentación asignado:", form);
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
              Asignar Plan de Alimentación
            </Typography>
            <Typography variant="subtitle1">
              Asigna un plan de alimentación personalizado a un paciente
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="usuario-label">Usuario</InputLabel>
                <Select
                  labelId="usuario-label"
                  value={form.usuario}
                  label="Usuario"
                  onChange={handleSelectChange}
                >
                  {usuarios.map((usuario) => (
                    <MenuItem key={usuario} value={usuario}>
                      {usuario}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Fecha de Inicio"
                type="date"
                fullWidth
                name="startDate"
                value={form.startDate}
                onChange={handleInputChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Duración (días)"
                type="number"
                fullWidth
                name="duration"
                value={form.duration}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Comidas por Día"
                type="number"
                fullWidth
                name="mealsPerDay"
                value={form.mealsPerDay}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Desayuno"
                type="text"
                fullWidth
                name="breakfast"
                value={form.breakfast}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Almuerzo"
                type="text"
                fullWidth
                name="lunch"
                value={form.lunch}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Cena"
                type="text"
                fullWidth
                name="dinner"
                value={form.dinner}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Snacks"
                type="text"
                fullWidth
                name="snacks"
                value={form.snacks}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Recomendaciones Especiales"
                type="text"
                fullWidth
                name="specialNotes"
                value={form.specialNotes}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
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
                Asignar Plan
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default AsignacionAlimentacion;
