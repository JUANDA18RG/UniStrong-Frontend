import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { FormDivider } from "./LoginComponents/form-divider";
import { Button, TextField, Grid, Typography, Alert } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import BackgroundImage from "../assets/images/BannerRegister.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";
import { varBounce } from "./animate/variants/bounce";
import { varFade } from "./animate/variants/fade";
import { varRotate } from "./animate/variants/rotate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useSnackbar } from "notistack";
import { CONFIG } from "../config-global";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  name: z.string().min(1, "Nombre completo es requerido"),
  dni: z.string().min(1, "Cédula es requerida"),
  email: z.string().email("Correo electrónico inválido"),
  phoneNumber: z.string().min(1, "Teléfono es requerido"),
  username: z
    .string()
    .min(6, "Nombre de usuario debe tener al menos 6 caracteres"),
  password: z
    .string()
    .min(10, "Contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Contraseña debe tener al menos una letra mayúscula")
    .regex(/[a-z]/, "Contraseña debe tener al menos una letra minúscula")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Contraseña debe tener al menos un carácter especial"
    ),
});

const defaultValues = {
  name: "",
  dni: "",
  email: "",
  phoneNumber: "",
  username: "",
  password: "",
};

const metadata = { title: `Register |  ${CONFIG.appName}` };

function Register() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState("");
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info("Data", data);
      const response = await signup(data);
      if (response && response.status === 201) {
        enqueueSnackbar("Usuario registrado exitosamente", {
          variant: "success",
        });
        navigate("/login");
      } else {
        enqueueSnackbar("Error al registrar usuario", {
          variant: "error",
        });
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
      console.log("Error:", errorMessage);
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
                maxWidth: 500,
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
                UniStrong <span style={{ color: "Black" }}>Register</span>
              </Typography>

              {/* Form */}
              {!!errorMsg && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {errorMsg}
                </Alert>
              )}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      label="Nombre Completo"
                      placeholder="Ingresa tu nombre completo"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                      {...register("name")}
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
                      name="dni"
                      label="Cédula"
                      placeholder="Ingresa tu cédula"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dni}
                      helperText={errors.dni ? errors.dni.message : ""}
                      {...register("dni")}
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
                      {...register("email")}
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
                      name="phoneNumber"
                      label="Teléfono"
                      placeholder="Ingresa tu número de teléfono"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.phoneNumber}
                      helperText={
                        errors.phoneNumber ? errors.phoneNumber.message : ""
                      }
                      {...register("phoneNumber")}
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
                      helperText={
                        errors.username ? errors.username.message : ""
                      }
                      {...register("username")}
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
                      placeholder="8+ caracteres"
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                      {...register("password")}
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
                              onClick={() =>
                                setPasswordVisible(!passwordVisible)
                              }
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
    </>
  );
}

export default Register;
