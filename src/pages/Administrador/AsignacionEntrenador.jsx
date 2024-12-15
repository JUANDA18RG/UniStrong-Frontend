import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Typography,
  Grid,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import Logo from "../../assets/images/Logo1.png";
import SelectUser from "../../components/Select/SelelectUser";
import SelectCoach from "../../components/Select/SelectCoach";
import { AsignarCoach } from "../../api/Ejericios";

function AsignacionEntrenador() {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedUsuario, setSelectedUsuario] = useState("");
  const [selectedEntrenador, setSelectedEntrenador] = useState("");
  const [error, setError] = useState("");

  const handleUserChange = (value) => {
    setSelectedUsuario(value);
  };

  const handleCoachChange = (value) => {
    setSelectedEntrenador(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await AsignarCoach({
        clientEmail: selectedUsuario,
        coachEmail: selectedEntrenador,
      });
      console.log("response", response);
      if (response && response.status === 200) {
        enqueueSnackbar("Asignación exitosa", {
          variant: "success",
        });
        setSelectedUsuario(""); // Limpiar el select de usuario
        setSelectedEntrenador(""); // Limpiar el select de entrenador
        setError("");
      } else {
        enqueueSnackbar("Error al asignar usuario", {
          variant: "error",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || // Mensaje personalizado del servidor
        (typeof error === "string" ? error : error.message);
      setError(errorMessage);
      console.error("Error al asignar usuario", errorMessage);
      enqueueSnackbar(`Error: ${errorMessage}`, {
        variant: "error",
      });
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
          src={"https://images7.alphacoders.com/130/1308025.jpg"}
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
          {!!error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <SelectUser
                  value={selectedUsuario}
                  onSelectionChange={handleUserChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                se le asigna
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <SelectCoach
                  value={selectedEntrenador}
                  onSelectionChange={handleCoachChange}
                />
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
