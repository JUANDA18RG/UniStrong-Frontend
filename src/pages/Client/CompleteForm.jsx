import Box from "@mui/material/Box";
import { FormDivider } from "../../components/LoginComponents/form-divider.jsx";
import { Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem,Typography} from "@mui/material";
import Logo from "../../assets/images/Logo1.png";
import BackgroundImage from "../../assets/images/BannerRegister.jpg";
import { motion } from "framer-motion";
import { varBounce } from "../../components/animate/variants/bounce.js";
import { varFade } from "../../components/animate/variants/fade.js";
import { varRotate } from "../../components/animate/variants/rotate.js";
import { CONFIG } from "../../config-global.js";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm} from "react-hook-form";
import { completarFormRequest } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import FormHelperText from '@mui/material/FormHelperText';

const metadata = { title: `Full |  ${CONFIG.appName}` };

function CompleteForm() {
    const navigate = useNavigate();
    const [height, setHeight] = useState('');
    const [diseases, setDiseases] = useState([]);
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const [errorMsg, setErrorMsg] = useState("");
    const { control, handleSubmit, reset, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      const parsedHeight = parseFloat(height);
      
      if (isNaN(parsedHeight)) {
        enqueueSnackbar('La altura es inválida', { variant: 'error',});
        console.error('La altura es inválida');
        return; 
      }

      const formData = {
        birthDate: data.birthDate,
        height: parsedHeight,  
        diseases,
        dietaryRestrictions,
      };
    
      console.log("Datos enviados", formData);
      console.log("Tipo de birthDate:", typeof formData.birthDate);
      console.log("Tipo de height:", typeof formData.height);
      console.log("Tipo de diseases:", Array.isArray(formData.diseases) ? 'Array' : typeof formData.diseases);
      console.log("Tipo de dietaryRestrictions:", Array.isArray(formData.dietaryRestrictions) ? 'Array' : typeof formData.dietaryRestrictions);
    
      try {
        const response = await completarFormRequest(formData);
        console.log(response.data); 
        enqueueSnackbar('Datos registrados con exito....', { variant: 'success'});
        navigate("/Membership"); 
        reset(); 
        
      } catch (error) {
        enqueueSnackbar('Error al enviar los datos', { variant: 'error'});
        console.error('Error al enviar los datos:', error); 
      }
    };
    

   return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <Grid
        container
        sx={{ overflow: "hidden" }}
        maxHeight={{ xs: "calc(100vh)", sm: "calc(100vh)" }}
      >
        {/* Left side: Background image with optional overlay */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: {
              xs: 2,
              sm: 4,
            },
            backgroundColor: "cultured.main",
          }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={varBounce().in}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "700px" },
                width: "100%",
                mt: 8,
                padding: {
                  xs: 2,
                  sm: 4,
                },
                borderRadius: 3,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Logo */}
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={varRotate().in}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    margin: "0 auto 10px auto",
                    padding: "5px",
                    border: "3px solid #ff0000",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    display: "block",
                    boxShadow: "0 10px 0 10px #ffffff",
                  }}
                />
              </motion.div>
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
                UniStrong <span style={{ color: "Black" }}>Complete the form</span>
              </Typography>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                     {...register("birthDate", { required: "La fecha de nacimiento es obligatoria" })}
                      name="birthDate"
                      label=" Fecha de cumpleaños"
                      type ="date"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      variant="outlined"
                      sx={{
                        backgroundColor: "#f4f4f9",
                        borderRadius: 2,
                      }}
                      error={!!errors.birthDate}
                      helperText={errors.birthDate ? errors.birthDate.message : ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  {...register("height", {
                    required: "La altura es obligatoria",
                    validate: (value) => {
                      const parsedValue = parseFloat(value.replace(",", "."));
                      return !isNaN(parsedValue) && parsedValue >= 1.3 && parsedValue <= 2.0
                        ? true
                        : "La altura debe ser un número entre 1.30 y 2.0 metros";
                    }
                  })}
                  name="height"
                  label="Altura (metros)"
                  placeholder="1,60"
                  InputLabelProps={{ shrink: true }}
                  value={height}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const parsedValue = parseFloat(inputValue.replace(",", "."));
                    if (!isNaN(parsedValue) && parsedValue >= 1.3 && parsedValue <= 2.0) {
                      setHeight(parsedValue);
                    } else {
                      setHeight(inputValue);
                    }
                  }}
                  type="text"
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "#f4f4f9", borderRadius: 2 }}
                  error={!!errors.height}  
                  helperText={errors.height ? errors.height.message : ""}
                />
              </Grid>
              
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="dense" variant="outlined" error={!!errors.diseases}>
                  <InputLabel id="diseases-select-label">Enfermedades</InputLabel>
                  <Select
                      {...register('diseases', { required: 'Debe seleccionar al menos una enfermedad' })}
                    labelId="diseases-select-label"
                    label="Enfermedades"
                    multiple
                    value={diseases}
                    onChange={(e) => { setDiseases(e.target.value);}}
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
                  {errors.diseases && <FormHelperText>{errors.diseases.message}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="dense" variant="outlined" error={!!errors.dietaryRestrictions}>
              <InputLabel id="dietaryRestrictions-select-label">Restricciones</InputLabel>
              <Select
               {...register("dietaryRestrictions", { required: "Selecciona al menos una restricción" })}
                labelId="dietaryRestrictions-select-label"
                label="Restricciones"
                multiple
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
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
              {errors.dietaryRestrictions && <FormHelperText>{errors.dietaryRestrictions.message}</FormHelperText>}
             </FormControl>
              </Grid>
               </Grid>
               

                {/* Divider */}
                <FormDivider />
                {/* Submit button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="redRYB"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    marginY: 2,
                    borderRadius: 2,
                    padding: 1.5,
                  }}
                >
                  Continuar
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" }, // Cambiado a "column" en pantallas pequeñas
                    marginTop: 2,
                    backgroundColor: "#ffffff",
                  }}
                      >
                      </Box>
                    </form>
                  </Box>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={false}
                md={6}
                sx={{
                  height: "100vh",
                }}
              >
              <motion.div
                variants={varFade().in}
                style={{
                  height: "100%",
                }}
              >
            <Box
              sx={{
                height: "100%",
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: { xs: "none", md: "block" }, // Oculta la imagen en pantallas pequeñas
                maxWidth: "100%",
               
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  textAlign: "center",
                  color: "white",
                  display: { xs: "none", md: "block" }, // Oculta el texto en pantallas pequeñas
                }}
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={varRotate().in}
                >
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1.5rem", sm: "3rem" } }}
                  >
                    Transform Your Body, Transform Your Life
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        {/* Right side: Form */}
      </Grid>
    </>
  );
}

export default CompleteForm;
