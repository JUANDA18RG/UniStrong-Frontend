import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo1.png";
import Banner from "../../assets/images/Grid8.jpg";

const CrearRutina = () => {
  const [newRoutine, setNewRoutine] = useState({
    title: "",
    description: "",
    userId: "",
    bodyPart: "",
    duration: "",
    difficulty: "",
    sets: "",
    reps: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      // Simulación de carga de usuarios
      const simulatedUsers = [
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
      ];
      setUsers(simulatedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoutine({ ...newRoutine, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!newRoutine.title) tempErrors.title = "El título es requerido";
    if (!newRoutine.description)
      tempErrors.description = "La descripción es requerida";
    if (!newRoutine.userId) tempErrors.userId = "El usuario es requerido";
    if (!newRoutine.bodyPart)
      tempErrors.bodyPart = "La parte del cuerpo es requerida";
    if (!newRoutine.duration) tempErrors.duration = "La duración es requerida";
    if (!newRoutine.difficulty)
      tempErrors.difficulty = "La dificultad es requerida";
    if (!newRoutine.sets) tempErrors.sets = "El número de series es requerido";
    if (!newRoutine.reps)
      tempErrors.reps = "El número de repeticiones es requerido";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Rutina creada:", newRoutine);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
          height: "100vh",
        }}
      >
        <motion.img
          src={Banner}
          alt="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
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
              sx={{ fontWeight: "bold", color: "redRYB.main" }}
            >
              Crear Nueva Rutina
            </Typography>
            <Typography variant="subtitle1">
              Asigna una nueva rutina de ejercicios a un usuario específico
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Título"
                type="text"
                fullWidth
                name="title"
                value={newRoutine.title}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Descripción"
                type="text"
                fullWidth
                name="description"
                value={newRoutine.description}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                error={!!errors.userId}
              >
                <InputLabel id="user-select-label">
                  Seleccionar Usuario
                </InputLabel>
                <Select
                  labelId="user-select-label"
                  name="userId"
                  value={newRoutine.userId}
                  onChange={handleInputChange}
                  label="Seleccionar Usuario"
                >
                  {loading ? (
                    <MenuItem value="">
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : (
                    users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name}
                      </MenuItem>
                    ))
                  )}
                </Select>
                {errors.userId && (
                  <Typography color="error">{errors.userId}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                error={!!errors.bodyPart}
              >
                <InputLabel id="body-part-select-label">
                  Parte del Cuerpo
                </InputLabel>
                <Select
                  labelId="body-part-select-label"
                  name="bodyPart"
                  value={newRoutine.bodyPart}
                  onChange={handleInputChange}
                  label="Parte del Cuerpo"
                >
                  <MenuItem value="Piernas">Piernas</MenuItem>
                  <MenuItem value="Brazos">Brazos</MenuItem>
                  <MenuItem value="Espalda">Espalda</MenuItem>
                  <MenuItem value="Pecho">Pecho</MenuItem>
                  <MenuItem value="Abdomen">Abdomen</MenuItem>
                </Select>
                {errors.bodyPart && (
                  <Typography color="error">{errors.bodyPart}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Duración (minutos)"
                type="number"
                fullWidth
                name="duration"
                value={newRoutine.duration}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.duration}
                helperText={errors.duration}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                error={!!errors.difficulty}
              >
                <InputLabel id="difficulty-select-label">Dificultad</InputLabel>
                <Select
                  labelId="difficulty-select-label"
                  name="difficulty"
                  value={newRoutine.difficulty}
                  onChange={handleInputChange}
                  label="Dificultad"
                >
                  <MenuItem value="Principiante">Principiante</MenuItem>
                  <MenuItem value="Intermedio">Intermedio</MenuItem>
                  <MenuItem value="Avanzado">Avanzado</MenuItem>
                </Select>
                {errors.difficulty && (
                  <Typography color="error">{errors.difficulty}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Número de Series"
                type="number"
                fullWidth
                name="sets"
                value={newRoutine.sets}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.sets}
                helperText={errors.sets}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Número de Repeticiones"
                type="number"
                fullWidth
                name="reps"
                value={newRoutine.reps}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.reps}
                helperText={errors.reps}
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
                    backgroundColor: "#b71c1c",
                  },
                }}
              >
                Crear Rutina
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default CrearRutina;
