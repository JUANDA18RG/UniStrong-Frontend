import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import NavbarNotAuthenticated from "./NavbarComponents/NavbarNotAuthenticated";
import NavbarAuthenticated from "./NavbarComponents/NavbarAuthenticated";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const location = useLocation();
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
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ flexGrow: 1, justifyContent: "flex-end" }}
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
