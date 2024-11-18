import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/banner.png";
import { motion } from "framer-motion"; // Cambiado a "motion"
import { varBounce } from "./animate/variants/bounce"; // Asegúrate de que esto esté bien configurado
import { varFade } from "./animate/variants/fade";

const Hero = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varFade().in}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        minHeight={{ xs: "calc(100vh)", sm: "calc(100vh)" }}
        sx={{
          background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          backgroundColor: "cultured.main",
          p: 3,
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={3}
          flex={{ xs: 1, md: 1 }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={varFade().in}
          >
            <Typography
              variant="h3"
              component="h1"
              color="redRYB.main"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                },
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              UniStrong
            </Typography>
          </motion.div>
          <Typography
            variant="h2"
            component="p"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
              fontWeight: 300,
              mb: 2,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Sweat, Smile <br /> and Repeat
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="gray.200"
            fontWeight={300}
            mb={4}
            sx={{ textAlign: "center" }}
          >
            Check out the most effective exercises personalized just for you.
          </Typography>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={varBounce().in}
          >
            <Box
              component={Link}
              to="/Login"
              variant="contained"
              color="primary"
              whileHover={{ scale: 1.05, backgroundColor: "redRYB.main" }}
              transition={{ duration: 0.3 }}
              sx={{
                padding: "10px 30px",
                fontSize: 18,
                fontWeight: 400,
                letterSpacing: 1.5,
                color: "white",
                textDecoration: "none",
                backgroundColor: "redRYB.main",
                "&:hover": {
                  backgroundColor: "redRYB.main",
                },
                borderRadius: 5,
              }}
            >
              Explora una nueva experiencia
            </Box>
          </motion.div>
        </Stack>

        {/* Imagen */}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={varBounce().in}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Asegúrate de que el contenedor ocupe el ancho completo
          }}
        >
          <Box
            component="img"
            src={BannerImage}
            alt="Banner Image"
            sx={{
              display: { xs: "none", md: "block" },
              width: { md: "50%" },
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          />
        </motion.div>
      </Stack>
    </motion.div>
  );
};

export default Hero;
