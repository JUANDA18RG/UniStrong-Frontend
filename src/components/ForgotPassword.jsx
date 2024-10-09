import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { FormDivider } from "./LoginComponents/form-divider";
import {Step, StepLabel, Stepper, Button, TextField, Grid, Typography } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import BackgroundImage from "../assets/images/BannerLogin.jpg";
import { motion } from "framer-motion"; // Cambiado a "motion"
import { varBounce } from "./animate/variants/bounce"; // Asegúrate de que esto esté bien configurado
import { varFade } from "./animate/variants/fade";
import { varRotate } from "./animate/variants/rotate";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// Asegúrate de que esto esté bien configurado

function ForgotPassword() {

  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Ingresa tu email', 'Verifica tu email', 'Cambia tu contraseña'];
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };
    
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const validateForm = () => {

    if (activeStep == 0){
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) { //falta
        newErrors.email = 'Debes ingresar un correo válido';
        isValid = false;
      } else if (activeStep == 2) {

        const expresionContraseña =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%*^&_+=!.-]).{8,}$/; //comparar con el backend si tenemso los mismo caracteres especiales

        if (!expresionContraseña ){

        }

      }


    }
    //mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.
    
    }
   


   const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de envío según el paso actual
    if (activeStep === 0) {
      // Aquí maneja el envío del email
      handleNext();
    } else if (activeStep === 1) {
      // Aquí maneja la verificación del código
      handleNext();
    } else if (activeStep === 2) {
      // Aquí maneja el cambio de contraseña
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
                  UniStrong  <span style={{ color: "Black" }}> Recover password</span>
                </Typography>
                
    
                {/* Form */}
                <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={3}>
                {activeStep === 0 && (
                <TextField
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
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
              {activeStep === 1 && (
                  <Box display="flex" flexDirection="column" gap={2}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem',   
                      },
                    }}
                  >
                    Please enter the code sent to your email address
                  </Typography>

                    <Box display="flex" gap={2}>
                        <TextField
                        name="code1"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="code2"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="code3"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="code4"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="code5"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="code6"
                        placeholder="0"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                    </Box>
                  </Box>
                    )}
                    {activeStep === 2 && (
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                        name="newPassword"
                        label="New Password"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter your new password"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        <TextField
                        name="confirmPassword"
                        label="Confirm Password"
                        type={passwordVisible1 ? "text" : "password"}
                        placeholder="Repeat your new password"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
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
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setPasswordVisible1(!passwordVisible1)}
                                edge="end"
                              >
                                {passwordVisible1 ? (
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
                    )}

              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  backgroundColor: "redRYB.main",
                  "&:hover": {
                    backgroundColor: "#b71c1c",
                  },
                }}
              >
                 {activeStep === 2 ? "Change Password" : "Next"}
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

export default ForgotPassword;
