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

      {/* Right side: Form */}
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
                  {...register("password", {
                    required: "Password is required",
                  })}
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
                sx={{
                  color: "blue",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Entra con tu cuenta
              </Typography>
            </Box>
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
    </Grid>
  );
}

export default Register;
