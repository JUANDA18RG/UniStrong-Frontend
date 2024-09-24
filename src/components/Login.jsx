import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { FormSocials } from "./LoginComponents/form-socials";
import { FormDivider } from "./LoginComponents/form-divider";
import { Button, TextField, Grid, Typography } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import BackgroundImage from "../assets/images/BannerLogin.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";

function Login() {
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
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          >
            Transform Your Body, Transform Your Life
          </Typography>
        </Box>
      </Grid>
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
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
              textAlign: "center",
              fontWeight: 700,
              textTransform: "uppercase",
              marginY: 3,
            }}
          >
            UniStrong <span style={{ color: "Black" }}>Login</span>
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
            </Box>

            <Box
              component={Link}
              to="/Register"
              variant="body2"
              color="inherit"
              sx={{ display: "block", textAlign: "right", mt: 1 }}
            >
              Forgot password?
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
          <FormSocials
            signInWithGoogle={() => console.log("Sign in with Google")}
            signInWithGithub={() => console.log("Sign in with Github")}
            signInWithTwitter={() => console.log("Sign in with Twitter")}
          />
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
              ¿Todavía no estás registrado?
            </Typography>
            <Link
              to="/Register"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              Regístrate
            </Link>
          </Box>
        </MotionBox>
      </Grid>
    </Grid>
  );
}

export default Login;
