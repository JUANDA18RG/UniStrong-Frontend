import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo1.png"; // Asegúrate de tener esta imagen en tu proyecto

function FormularioCreacionUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUserTypeChange = (event, newUserType) => {
    setForm({ ...form, userType: newUserType });
  };

  const handleSubmit = () => {
    console.log("Usuario creado:", form);
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
          src={"https://images4.alphacoders.com/112/1128335.jpg"}
          alt="admin"
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
              Crear Usuario
            </Typography>
            <Typography variant="subtitle1">
              Completa el formulario para crear un nuevo usuario
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Nombre"
                type="text"
                fullWidth
                name="name"
                value={form.name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Tipo de Usuario
              </Typography>
              <ToggleButtonGroup
                value={form.userType}
                exclusive
                onChange={handleUserTypeChange}
                fullWidth
                sx={{
                  "& .MuiToggleButton-root": {
                    flex: 1,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    margin: "0 4px",
                    "&.Mui-selected": {
                      backgroundColor: "redRYB.main",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "redRYB.main",
                      },
                    },
                  },
                }}
              >
                <ToggleButton value="Entrenador">Entrenador</ToggleButton>
                <ToggleButton value="Nutriólogo">Nutriólogo</ToggleButton>
                <ToggleButton value="Contador">Contador</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Correo"
                type="email"
                fullWidth
                name="email"
                value={form.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Contraseña"
                type="password"
                fullWidth
                name="password"
                value={form.password}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Número de Teléfono"
                type="tel"
                fullWidth
                name="phoneNumber"
                value={form.phoneNumber}
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
                Crear Usuario
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default FormularioCreacionUser;
