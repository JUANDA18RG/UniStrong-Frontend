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
  Alert,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import Logo from "../../assets/images/Logo1.png";
import Banner from "../../assets/images/Grid8.jpg";
import { RutinasCreate } from "../../api/Ejericios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/authContext"; // Importar el contexto de autenticación

const schema = z.object({
  name: z.string().nonempty("El nombre es requerido"),
  description: z.string().nonempty("La descripción es requerida"),
  category: z.string().nonempty("La categoría es requerida"),
  musclesWorked: z
    .array(z.string())
    .nonempty("El músculo trabajado es requerido"),
});

const defaultValues = {
  name: "",
  description: "",
  category: "",
  musclesWorked: [],
};

const CrearRutina = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const { enqueueSnackbar } = useSnackbar();
  const { User } = useAuth();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      if (data.musclesWorked.length === 0) {
        throw new Error("Debes seleccionar al menos un músculo trabajado");
      }
      const routineData = { ...data, coachId: User.id };
      const response = await RutinasCreate(routineData);

      if (response.status === 201) {
        enqueueSnackbar("Rutina creada exitosamente", {
          variant: "success",
        });
        reset();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || // Mensaje personalizado del servidor
        (typeof error === "string" ? error : error.message);
      setError(errorMessage);
      console.error("Error al crear la rutina", errorMessage);
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
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0, rotate: -10 },
                animate: { opacity: 1, rotate: 0 },
                exit: { opacity: 0, rotate: 10 },
              }}
            >
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
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </motion.div>
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
          {!!error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="Nombre"
                      type="text"
                      fullWidth
                      variant="outlined"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={{
                        backgroundColor: "#f4f4f9",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },
                          "&:hover fieldset": {
                            borderColor: "blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "redRYB.main",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "red",
                          },
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="Descripción"
                      type="text"
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={4}
                      maxRows={4}
                      error={!!errors.description}
                      helperText={errors.description?.message}
                      sx={{
                        backgroundColor: "#f4f4f9",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },
                          "&:hover fieldset": {
                            borderColor: "blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "redRYB.main",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "red",
                          },
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  error={!!errors.category}
                >
                  <InputLabel id="category-select-label">Categoría</InputLabel>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="category-select-label"
                        label="Categoría"
                        sx={{
                          backgroundColor: "#f4f4f9",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "gray",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "redRYB.main",
                            },
                            "&.Mui-error fieldset": {
                              borderColor: "red",
                            },
                          },
                        }}
                      >
                        <MenuItem value="Facil">Facil</MenuItem>
                        <MenuItem value="Medio">Medio</MenuItem>
                        <MenuItem value="Avanzado">Avanzado</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <Typography color="error">
                      {errors.category.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  error={!!errors.musclesWorked}
                >
                  <InputLabel id="musclesWorked-select-label">
                    Músculos Trabajados
                  </InputLabel>
                  <Controller
                    name="musclesWorked"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="musclesWorked-select-label"
                        label="Músculos Trabajados"
                        multiple
                        sx={{
                          backgroundColor: "#f4f4f9",
                          borderRadius: 2,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "gray",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "redRYB.main",
                            },
                            "&.Mui-error fieldset": {
                              borderColor: "red",
                            },
                          },
                        }}
                      >
                        <MenuItem value="Pecho">Pecho</MenuItem>
                        <MenuItem value="Espalda">Espalda</MenuItem>
                        <MenuItem value="Piernas">Piernas</MenuItem>
                        <MenuItem value="Brazos">Brazos</MenuItem>
                        <MenuItem value="Hombros">Hombros</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "redRYB.main",
                    "&:hover": {
                      backgroundColor: "#b71c1c",
                    },
                  }}
                >
                  {isSubmitting ? "Creando..." : "Crear Rutina"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default CrearRutina;
