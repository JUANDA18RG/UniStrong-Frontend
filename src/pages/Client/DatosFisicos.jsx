import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {TextField, Button, Typography, Stack, Box, Grid } from "@mui/material";
import {actualizarDatosFisicosRequest} from "../../api/editar.js";
import { useAuth } from "../../context/authContext";
import { useSnackbar } from "notistack";

const DatosFisicos = () => {
    const {User} = useAuth();
    const iduser = User?.id;
    const {enqueueSnackbar} = useSnackbar();
    const [informacion, setInformacion] = useState({
      weight:"",
      height: "",
      waist:"",
      legs: "",
      arms: "",
      chest:"",
      glutes:"",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

      const handleUpdate = async () => {

        setLoading(true);
        setError("");
        console.log("Datos a enviar:", informacion);
        try {
          const response = await actualizarDatosFisicosRequest(iduser, informacion);
          if (response?.status === 200) {
            enqueueSnackbar("¡Nuevas medidas registradas correctamente!",{variant: 'success'});
            setInformacion((prevState) => ({
              ...prevState,
              weight:"",
              height: "",
              waist:"",
              legs: "",
              arms: "",
              chest:"",
              glutes:"",
            }));
          } else {
            setError({message:response?.data?.message || "Error al registrar las medidas"});
            enqueueSnackbar("Error al registrar las medidas",{variant: 'error'});
            setInformacion((prevState) => ({
              ...prevState,
              weight:"",
              height: "",
              waist:"",
              legs: "",
              arms: "",
              chest:"",
              glutes:"",
            }));
          }
        } catch (error) {
          const errorMessage = error.response.data.message || "Error desconocido"
          enqueueSnackbar(errorMessage,{variant: 'error'});
        } finally {
          setLoading(false);
        }
      };
    // Aquí podrías agregar la lógica para traer la información del back-end
  
    return (
      <Grid
         container
          sx={{
           overflow: 'hidden',
          width: '100%',
          padding: { xs: 2, sm: 4 },
          height: '100%',
          minHeight: '100vh',
          backgroundColor: 'common.black',
            }}
           >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                  display: 'flex',
                  backgroundColor: 'cultured.main',
                  marginTop: '100px',
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
                       
            <Box sx={{ padding: 4 }}>
              <Typography
                  variant="h5"
                  component="h1"
                  color="redRYB.main"
                  sx={{
                    fontSize: {
                      xs: "1.5rem", // Tamaño de fuente más pequeño en pantallas pequeñas
                      sm: "2rem", // Tamaño de fuente más grande en pantallas medianas
                      md: "2.5rem", // Tamaño de fuente más grande en pantallas grandes
                    },
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginY: 3, // Agrega margen arriba y abajo
                  }}
                >
                   <span style={{ color: " red" }}>Actualizar Datos Fisicos </span>
                </Typography>
                <Stack spacing={3} sx={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
                
                <Grid container spacing={3}>
                    {/* Columna 1 */}
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Peso"
                        fullWidth
                        variant="outlined"
                        value={informacion.weight}
                        onChange={(e) => setInformacion({ ...informacion, weight: e.target.value })}
                    />
                    </Grid>
                    {/* Columna 2 */}
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Cintura"
                        fullWidth
                        variant="outlined"
                        value={informacion.waist}
                        onChange={(e) => setInformacion({ ...informacion, waist: e.target.value })}
                    />
                    </Grid>
                     {/* Columna 2 */}
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Piernas"
                        fullWidth
                        variant="outlined"
                        value={informacion.legs}
                        onChange={(e) => setInformacion({ ...informacion, legs :e.target.value })}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Brazo"
                        fullWidth
                        variant="outlined"
                        value={informacion.arms}
                        onChange={(e) => setInformacion({ ...informacion, arms: e.target.value })}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Pecho"
                        fullWidth
                        variant="outlined"
                        value={informacion.chest}
                        onChange={(e) => setInformacion({ ...informacion, chest: e.target.value })}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Gluteo"
                        fullWidth
                        variant="outlined"
                        value={informacion.glutes}
                        onChange={(e) => setInformacion({ ...informacion, glutes: e.target.value })}
                    />
                    </Grid>
                </Grid>
        
                {/* Botón de Guardar Cambios */}
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
                        <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "red",
                            "&:hover": { backgroundColor: "darkred" },
                            padding: "   10px 45px", 
                            fontSize: "0.975rem", 
                        }}
                        onClick={handleUpdate}
                        disabled={loading}
                        >
                        {loading ? "Guardando..." : "Guardar Cambios"}
                        </Button>
                    </Box>
                </Stack>
      </Box>
      </Grid>
      </Grid>
    );
  };

export default  DatosFisicos;
