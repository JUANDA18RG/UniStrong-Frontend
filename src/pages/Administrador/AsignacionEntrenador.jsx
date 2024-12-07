import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo1.png"; // Asegúrate de tener esta imagen en tu proyecto

const usuarios = [
  { id: 1, email: "usuario1@example.com" },
  { id: 2, email: "usuario2@example.com" },
  { id: 3, email: "usuario3@example.com" },
];

const entrenadores = [
  { id: 1, email: "entrenador1@example.com" },
  { id: 2, email: "entrenador2@example.com" },
  { id: 3, email: "entrenador3@example.com" },
];

function AsignacionEntrenador() {
  const [selectedUsuario, setSelectedUsuario] = useState("");
  const [selectedEntrenador, setSelectedEntrenador] = useState("");

  const handleUsuarioChange = (event) => {
    setSelectedUsuario(event.target.value);
  };

  const handleEntrenadorChange = (event) => {
    setSelectedEntrenador(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Asignación:", {
      usuario: selectedUsuario,
      entrenador: selectedEntrenador,
    });
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
            "https://rare-gallery.com/uploads/posts/877870-rope-Fitness-Gym-Workout.jpg"
          }
          alt="Entrenador"
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
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "redRYB.main",
              mb: 4,
              textAlign: "center",
            }}
          >
            Asignación de Entrenador
          </Typography>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Seleccione el usuario y el entrenador a asignar para la sesión de
              entrenamiento personalizado para el usuario.
            </Typography>
          </Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <InputLabel id="usuario-label">Correo del Usuario</InputLabel>
                <Select
                  labelId="usuario-label"
                  value={selectedUsuario}
                  label="Correo del Usuario"
                  onChange={handleUsuarioChange}
                >
                  {usuarios.map((usuario) => (
                    <MenuItem key={usuario.id} value={usuario.email}>
                      {usuario.email}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                se le asigna
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <InputLabel id="entrenador-label">
                  Correo del Entrenador
                </InputLabel>
                <Select
                  labelId="entrenador-label"
                  value={selectedEntrenador}
                  label="Correo del Entrenador"
                  onChange={handleEntrenadorChange}
                >
                  {entrenadores.map((entrenador) => (
                    <MenuItem key={entrenador.id} value={entrenador.email}>
                      {entrenador.email}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                Asignar Entrenador
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default AsignacionEntrenador;
