import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/banner.png";
import { motion } from "framer-motion";

const Hero = () => {
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
      minHeight={{ xs: "calc(100vh - 70px)", sm: "calc(100vh - 80px)" }}
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
        >
          Check out the most effective exercises personalized just for you.
        </Typography>
        <MotionButton
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
            backgroundColor: "redRYB.main",
            "&:hover": {
              backgroundColor: "redRYB.main",
            },
          }}
        >
          Explora una nueva experiencia
        </MotionButton>
      </Stack>

      {/* Imagen */}
      <MotionBox
        component="img"
        src={BannerImage}
        alt="Banner Image"
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
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "50%" },
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      />
    </Stack>
  );
};

export default Hero;
