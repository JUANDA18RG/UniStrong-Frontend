import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { FormDivider } from "./LoginComponents/form-divider";
import { Button, TextField, Grid, Typography } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import BackgroundImage from "../assets/images/BannerRegister.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";
import { varBounce } from "./animate/variants/bounce";
import { varFade } from "./animate/variants/fade";
import { varRotate } from "./animate/variants/rotate";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid
      container
      sx={{ overflow: "hidden" }}
      maxHeight={{ xs: "calc(100vh - 70px)", sm: "calc(100vh - 80px)" }}
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
              maxWidth: 500,
              width: "100%",
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
              UniStrong <span style={{ color: "Black" }}>Register</span>
            </Typography>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fullName"
                    label="Nombre Completo"
                    placeholder="Ingresa tu nombre completo"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.fullName}
                    helperText={errors.fullName ? errors.fullName.message : ""}
                    {...register("fullName", {
                      required: "Nombre completo es requerido",
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="cedula"
                    label="Cédula"
                    placeholder="Ingresa tu cédula"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.cedula}
                    helperText={errors.cedula ? errors.cedula.message : ""}
                    {...register("cedula", {
                      required: "Cédula es requerida",
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Correo Electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    {...register("email", {
                      required: "Correo electrónico es requerido",
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phone"
                    label="Teléfono"
                    placeholder="Ingresa tu número de teléfono"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                    {...register("phone", {
                      required: "Teléfono es requerido",
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="username"
                    label="Nombre de Usuario"
                    placeholder="Ingresa tu nombre de usuario"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ""}
                    {...register("username", {
                      required: "Nombre de usuario es requerido",
                      minLength: {
                        value: 6,
                        message:
                          "El nombre de usuario debe tener al menos 6 caracteres",
                      },
                      pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9_]{5,}$/,
                        message:
                          "El nombre de usuario no puede empezar con un número o símbolo",
                      },
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="password"
                    label="Contraseña"
                    type={passwordVisible ? "text" : "password"}
                    InputLabelProps={{ shrink: true }}
                    placeholder="6+ caracteres"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    {...register("password", {
                      required: "Contraseña es requerida",
                      minLength: {
                        value: 6,
                        message:
                          "La contraseña debe tener al menos 6 caracteres",
                      },
                    })}
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f4f4f9",
                      borderRadius: 2,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                          >
                            {passwordVisible ? (
                              <RemoveRedEyeIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* Divider */}
              <FormDivider />
              {/* Submit button */}
              <Button
                type="submit"
                variant="contained"
                color="redRYB"
                disabled={isSubmitting}
                fullWidth
                sx={{
                  textTransform: "none",
                  marginY: 2,
                  borderRadius: 2,
                  padding: 1.5,
                }}
              >
                Registrarse
              </Button>
              {/* Link to Login */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" }, // Cambiado a "column" en pantallas pequeñas
                  marginTop: 2,
                }}
              >
                <Typography variant="body1" sx={{ marginRight: { sm: 1 } }}>
                  ¿ya tienes una cuenta?
                </Typography>
                <Typography
                  component={Link}
                  to="/login"
                  sx={{
                    color: "blue",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Iniciar Sesión
                </Typography>
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
  );
}

export default Register;
