import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import NavbarNotAuthenticated from "./NavbarComponents/NavbarNotAuthenticated";
import NavbarAuthenticated from "./NavbarComponents/NavbarAuthenticated";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

  const { isAuthenticated } = useAuth();

  const activeRoutes = {
    home: location.pathname === "/",
    exercises: location.pathname.includes("/exercises"),
    favorites: location.pathname === "/favorites",
  };

  return (
    <Box
      sx={{
        component: "nav",
        paddingX: "20px",
        width: "100%",
        maxWidth: "none",
        height: { xs: 70, sm: 80 },
        py: { xs: 1 / 2, sm: 1 },
        boxShadow: 4,
        position: "fixed",
        zIndex: 1000,
        backgroundColor: isScrolled
          ? "rgba(242, 242, 242, 0.9)"
          : "cultured.main",
        transition: "background-color 0.3s",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <Button component={Link} to="/" color="richBlack">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <img src={Logo} alt="app logo" width={48} height={48} />
            <Typography
              variant="h5"
              component="p"
              fontFamily="logoFontFamily"
              fontWeight={700}
            >
              UniStrong
            </Typography>
          </Stack>
        </Button>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1" component="p">
            Fecha de ingreso de usuario:
            <Typography
              variant="subtitle1"
              component="span"
              sx={{ color: "redRYB.main" }}
            >
              {` ${currentDate}`}
            </Typography>
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ justifyContent: "flex-end" }}
        >
          {!isAuthenticated && (
            <NavbarNotAuthenticated activeRoutes={activeRoutes} />
          )}
          {isAuthenticated && <NavbarAuthenticated />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
