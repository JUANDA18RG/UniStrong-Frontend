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
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../assets/images/Logo1.png";
import { registerRequest } from "../../api/auth";

// Definir el esquema de validación con zod
const schema = z.object({
  name: z.string().min(1, "Nombre completo es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  password: z
    .string()
    .min(10, "Contraseña debe tener al menos 10 caracteres")
    .regex(/[A-Z]/, "Contraseña debe tener al menos una letra mayúscula")
    .regex(/[a-z]/, "Contraseña debe tener al menos una letra minúscula")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Contraseña debe tener al menos un carácter especial"
    ),
  userType: z.string().min(1, "Tipo de usuario es requerido"),
  phoneNumber: z.string().min(1, "Número de teléfono es requerido"),
  dni: z.string().min(1, "DNI es requerido"),
  username: z
    .string()
    .min(6, "Nombre de usuario debe tener al menos 6 caracteres"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  userType: "",
  phoneNumber: "",
  dni: "",
  username: "",
};

function FormularioCreacionUser() {
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleUserTypeChange = (event, newUserType) => {
    setValue("userType", newUserType);
  };

  const onSubmit = async (data) => {
    let translatedUserType = "";
    switch (data.userType) {
      case "Entrenador":
        translatedUserType = "coach";
        break;
      case "Nutriólogo":
        translatedUserType = "nutriologo";
        break;
      case "Contador":
        translatedUserType = "contador";
        break;
      default:
        translatedUserType = "";
    }

    const userData = {
      email: data.email,
      name: data.name,
      dni: data.dni,
      username: data.username,
      password: data.password,
      phoneNumber: data.phoneNumber,
      userType: translatedUserType,
    };

    try {
      const response = await registerRequest(userData);
      console.log(response);
      if (response.status === 201) {
        enqueueSnackbar("Usuario creado correctamente", {
          variant: "success",
        });
        reset(); // Limpiar los campos del formulario
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || // Mensaje personalizado del servidor
        (typeof error === "string" ? error : error.message);
      setErrorMsg(errorMessage);
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
          {!!errorMsg && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {errorMsg}
            </Typography>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="Nombre"
                  type="text"
                  fullWidth
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  {...register("name")}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Tipo de Usuario
                </Typography>
                <Controller
                  name="userType"
                  control={control}
                  render={({ field }) => (
                    <ToggleButtonGroup
                      value={field.value}
                      exclusive
                      onChange={(event, newValue) => {
                        field.onChange(newValue);
                      }}
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
                  )}
                />
                {errors.userType && (
                  <Typography variant="body2" color="error">
                    {errors.userType.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="Correo"
                  type="email"
                  fullWidth
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...register("email")}
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
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  {...register("password")}
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
                  error={!!errors.phoneNumber}
                  helperText={
                    errors.phoneNumber ? errors.phoneNumber.message : ""
                  }
                  {...register("phoneNumber")}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="DNI"
                  type="text"
                  fullWidth
                  name="dni"
                  error={!!errors.dni}
                  helperText={errors.dni ? errors.dni.message : ""}
                  {...register("dni")}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="Nombre de Usuario"
                  type="text"
                  fullWidth
                  name="username"
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : ""}
                  {...register("username")}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
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
          </form>
        </Card>
      </Box>
    </Box>
  );
}

export default FormularioCreacionUser;
