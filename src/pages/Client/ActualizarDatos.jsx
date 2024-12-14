import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, Stack, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { obtenerDatosRequest, actualizarDatosRequest} from "../../api/editar.js";
import { useAuth } from "../../context/authContext";

const ActualizarInformacion = () => {
  const { User } = useAuth();
  const id = User?.id;
  const [informacion, setInformacion] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
    dni: "",
    birthDate: "",
    phoneNumber: "",
    height: "", 
    diseases: [],
    dietaryRestrictions: [],
  });
  const [diseasesOptions, setDiseasesOptions] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("ID del usuario:", id);
      if (!id) {
        console.error("ID no válido");
        return;
      }

      try {
        const response = await obtenerDatosRequest(id);
        const data = response?.data;
        console.log("Datos de la respuesta:", data);
        const birthDate = data?.birthDate ? new Date(data?.birthDate).toISOString().split('T')[0] : '';
        setInformacion({
          name: data?.user?.name || '',
          email: data?.user?.email || '',
          phoneNumber: data?.user?.phoneNumber || '',
          height: data?.height || '',
          dni: data?.user?.dni || '',
          birthDate: birthDate,
          diseases: Array.isArray(data?.diseases) ? data?.diseases : [],
          dietaryRestrictions: Array.isArray(data?.dietaryRestrictions) ? data?.dietaryRestrictions : [],
        });
        setDiseasesOptions(data?.diseasesList || []);
      } catch (error) {
        console.error("Error al obtener los datos", error);
        setInformacion((prevState) => ({
          ...prevState,
          error: "Hubo un problema al cargar los datos.",
        }));
      }
    };

    fetchData();
  }, [id]);



  const handleUpdate = async () => {
    setLoading(true);
    setError("");
    console.log("Datos a enviar:", informacion);
    try {
      const response = await actualizarDatosRequest(informacion);
      if (response?.status === 200) {
        alert("Datos actualizados correctamente!");
      } else {
        setError("");
      }
    } catch (error) {
      console.error("Error al actualizar los datos", error);
      setError("Hubo un problema al actualizar los datos."); 
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <Grid container sx={{ overflow: 'hidden', width: '100%', padding: { xs: 2, sm: 4 }, height: '100%', minHeight: '100vh', backgroundColor: 'common.black' }}>
      <Grid item xs={12} md={12} sx={{ display: 'flex', backgroundColor: 'cultured.main', marginTop: '100px', padding: 2, borderRadius: 2, boxShadow: 2, flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h5" component="h1" color="redRYB.main" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, textAlign: "center", justifyContent: "center", fontWeight: 700, textTransform: "uppercase", marginY: 3 }}>
            <span style={{ color: "red" }}>Actualizar Información Personal</span>
          </Typography>
          <Stack spacing={3} sx={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
            <Grid container spacing={3}>
              {/* Columna 1 */}
              <Grid item xs={12} sm={6}>
                <TextField label="Nombre" fullWidth variant="outlined" value={informacion.name} onChange={(e) => setInformacion({ ...informacion, name: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Correo" fullWidth variant="outlined" value={informacion.email} onChange={(e) => setInformacion({ ...informacion, email: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Número de Teléfono" fullWidth variant="outlined" value={informacion.phoneNumber} onChange={(e) => setInformacion({ ...informacion, phoneNumber: e.target.value })} />
              </Grid>
              {/* Columna 2 */}
              <Grid item xs={12} sm={6}>
              <TextField
                name="height"
                label="Altura (metros)"
                placeholder="1,60"
                InputLabelProps={{ shrink: true }}
                value={informacion.height}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const parsedValue = parseFloat(inputValue.replace(",", "."));
                  if (!isNaN(parsedValue) && parsedValue >= 1.3 && parsedValue <= 2.0) {
                    informacion.height(parsedValue);
                    setError(""); 
                  } else {
                    informacion.height(inputValue); 
                    setError("La altura debe ser un número entre 1.30 y 2.0 metros");
                  }
                }}
                type="text"
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#f4f4f9", borderRadius: 2 }}
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Dni" fullWidth variant="outlined" value={informacion.dni} onChange={(e) => setInformacion({ ...informacion, dni: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="dense" variant="outlined">
                  <InputLabel id="diseases-select-label">Enfermedades</InputLabel>
                  <Select
                    labelId="diseases-select-label"
                    label="Enfermedades"
                    multiple
                    value={informacion.diseases}
                    onChange={(e) => setInformacion({ ...informacion, diseases: e.target.value })}
                    renderValue={(selected) => selected.join(", ")} 
                    fullWidth
                    variant="outlined"
                    sx={{
                    backgroundColor: "#f4f4f9",
                    borderRadius: 2,}}
                  >
                    <MenuItem value="Hipertensión arterial">Hipertensión arterial</MenuItem>
                    <MenuItem value="Diabetes">Diabetes</MenuItem>
                    <MenuItem value="Obesidad">Obesidad</MenuItem>
                    <MenuItem value="Asma">Asma</MenuItem>
                    <MenuItem value="Artritis">Artritis</MenuItem>
                    <MenuItem value="Osteoporosis">Osteoporosis</MenuItem>
                    <MenuItem value="Hernias discales">Hernias discales</MenuItem>
                    <MenuItem value="Insuficiencia cardíaca">Insuficiencia cardíaca</MenuItem>
                    <MenuItem value="Hipotiroidismo">Hipotiroidismo</MenuItem>
                    <MenuItem value="Ninguna">Ninguna</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="dense" variant="outlined">
              <InputLabel id="dietaryRestrictions-select-label">Restricciones</InputLabel>
              <Select
                labelId="dietaryRestrictions-select-label"
                label="Restricciones"
                multiple
                value={informacion.dietaryRestrictions}
                onChange={(e) => setInformacion({ ...informacion, dietaryRestrictions: e.target.value })}
                renderValue={(selected) => selected.join(", ")} 
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#f4f4f9", borderRadius: 2 }}
              >
                <MenuItem value="Sin Lactosa">Sin Lactosa</MenuItem>
                <MenuItem value="Sin Gluten">Sin Gluten</MenuItem>
                <MenuItem value="Vegetariana">Vegetariana</MenuItem>
                <MenuItem value="Vegana">Vegana</MenuItem>
                <MenuItem value="Baja en Carbohidratos">Baja en Carbohidratos</MenuItem>
                <MenuItem value="Alta en Proteínas">Alta en Proteínas</MenuItem>
                <MenuItem value="Sin Frutos Secos">Sin Frutos Secos</MenuItem>
                <MenuItem value="Keto">Keto</MenuItem>
                <MenuItem value="Ninguna">Ninguna</MenuItem>
              </Select>
             </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Fecha de cumpleaños" type="date" fullWidth variant="outlined" value={informacion.birthDate} onChange={(e) => setInformacion({ ...informacion, birthDate: e.target.value })} />
              </Grid>
              {/* Contraseñas */}
              <Grid item xs={12} sm={6}>
                <TextField label="Contraseña actual" type="password" fullWidth variant="outlined" value={informacion.passwordCurrent} onChange={(e) => setInformacion({ ...informacion, passwordCurrent: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Nueva Contraseña" type="password" fullWidth variant="outlined" value={informacion.password} onChange={(e) => setInformacion({ ...informacion, password: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Confirmar Nueva Contraseña" type="password" fullWidth variant="outlined" value={informacion.confirmarContrasena} onChange={(e) => setInformacion({ ...informacion, confirmarContrasena: e.target.value })} />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "darkred" }, padding: "10px 45px", fontSize: "0.975rem" }}
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

export default ActualizarInformacion;
