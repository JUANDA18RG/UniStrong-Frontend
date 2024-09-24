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

function Register() {
  const MotionBox = motion(Box);
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

      {/* Right side: Form */}
      <Grid
        item
        xs={12}
        sm={6}
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
        <MotionBox
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          {/* Logo */}
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
              alignItems: "center",
              justifyItems: "center",
              display: "block",
              boxShadow: "0 10px 0 10px #ffffff",
            }}
          />
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
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                name="email"
                label="Email Address"
                placeholder="Email the user"
                InputLabelProps={{ shrink: true }}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                {...register("email", { required: "Email is required" })}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#f4f4f9",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Color del borde normal
                    },
                    "&:hover fieldset": {
                      borderColor: "blue", // Color del borde al pasar el mouse
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "redRYB.main", // Color del borde cuando está enfocado
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "red", // Color del borde cuando hay un error
                    },
                  },
                }}
              />

              <TextField
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                InputLabelProps={{ shrink: true }}
                placeholder="6+ characters"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                {...register("password", { required: "Password is required" })}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#f4f4f9",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Color del borde normal
                    },
                    "&:hover fieldset": {
                      borderColor: "blue", // Color del borde al pasar el mouse
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "redRYB.main", // Color del borde cuando está enfocado
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "red", // Color del borde cuando hay un error
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        edge="end"
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
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: "redRYB.main",
                "&:hover": {
                  backgroundColor: "#b71c1c",
                },
              }}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <FormDivider />

          {/* Social login buttons */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row", // Cambiado a "row" para que los elementos estén uno al lado del otro
              marginTop: 2,
            }}
          >
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              ¿Ya estás registrado?
            </Typography>
            <Typography
              component={Link}
              to="/Login"
              variant="contained"
              href="/Register"
              sx={{
                color: "redRYB.main",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Logueate
            </Typography>
          </Box>
        </MotionBox>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          display: { xs: "none", sm: "flex" }, // Cambia a "flex" para usar flexbox
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center", // Centra verticalmente
          position: "relative", // Necesario para la superposición
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Esto asegura que tome el 100% de la altura de la pantalla
        }}
      >
        {/* Superposición oscura */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Color negro con 50% de opacidad
            zIndex: 1, // Asegura que la superposición esté sobre la imagen de fondo
          }}
        />
        {/* Contenido centrado */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2, // Asegura que el contenido esté sobre la superposición
            textAlign: "center", // Opcional: centra el texto dentro del Box
            color: "white", // Opcional: color del texto
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            Transform Your Body, Transform Your Life
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;
