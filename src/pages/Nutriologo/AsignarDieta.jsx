import React, { useState, useEffect } from "react";
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
import { useSnackbar } from "notistack"; // Importación correcta

function AsignarDieta() {
  const { enqueueSnackbar } = useSnackbar(); // Llamar a useSnackbar para mostrar notificaciones

  const [form, setForm] = useState({
    email: "",
    dietId: "",
  });

  const [usuarios, setUsuarios] = useState([]);
  const [dietas, setDietas] = useState([]);

  // Cargar los usuarios y las dietas desde las APIs
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3001/client");
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data);
        } else {
          enqueueSnackbar("Error al cargar los usuarios", { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("Error de conexión con los usuarios", { variant: "error" });
      }
    };

    const fetchDietas = async () => {
      try {
        const response = await fetch("http://localhost:3001/diet");
        if (response.ok) {
          const data = await response.json();
          setDietas(data);
        } else {
          enqueueSnackbar("Error al cargar las dietas", { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("Error de conexión con las dietas", { variant: "error" });
      }
    };

    fetchUsuarios();
    fetchDietas();
  }, [enqueueSnackbar]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const { email, dietId } = form;

    try {
      const response = await fetch("http://localhost:3001/diet/assingByEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, dietId }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Dieta asignada:", result);

        // Mostrar un mensaje de éxito usando enqueueSnackbar
        enqueueSnackbar("Dieta asignada con éxito", { variant: "success" });
      } else {
        console.error("Error al asignar la dieta");

        // Mostrar un mensaje de error usando enqueueSnackbar
        enqueueSnackbar("Error al asignar la dieta", { variant: "error" });
      }
    } catch (error) {
      console.error("Error de conexión:", error);

      // Mostrar un mensaje de error de conexión
      enqueueSnackbar("Error de conexión", { variant: "error" });
    }
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
      <Grid container spacing={4} sx={{ flex: 1 }}>
        {/* Formulario a la izquierda */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              height: "100%",
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
                  Asignar Dieta
                </Typography>
                <Typography variant="subtitle1">
                  Asocia una dieta a un paciente
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="email-label">Email del Usuario</InputLabel>
                    <Select
                      labelId="email-label"
                      value={form.email}
                      label="Email del Usuario"
                      name="email"
                      onChange={handleInputChange}
                    >
                      {usuarios.map((usuario) => (
                        <MenuItem key={usuario.id} value={usuario.user.email}>
                          {usuario.user.email}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="diet-label">Dieta</InputLabel>
                    <Select
                      labelId="diet-label"
                      value={form.dietId}
                      label="Dieta"
                      name="dietId"
                      onChange={handleInputChange}
                    >
                      {dietas.map((dieta) => (
                        <MenuItem key={dieta.id} value={dieta.id}>
                          {dieta.name}
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
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>

        {/* Imagen a la derecha */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default AsignarDieta;
