import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../assets/images/Logo1.png";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const ModalNavButton = styled(Button)(({ theme }) => ({
  borderBottom: "3px solid transparent",
  fontSize: 28,
  fontWeight: 300,
  transition: theme.transitions.create("transform"),
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            display={{ xs: "none", md: "flex" }}
          >
            <Button
              component={NavLink}
              to="/"
              color="richBlack"
              sx={{
                borderBottom: 3,
                borderBottomColor: activeRoutes.home
                  ? "redRYB.main"
                  : "transparent",
              }}
              startIcon={<HomeIcon />}
              end
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/About"
              color="richBlack"
              sx={{
                borderBottom: 3,
                borderBottomColor: activeRoutes.exercises
                  ? "redRYB.main"
                  : "transparent",
              }}
              startIcon={<MoreHorizIcon />}
            >
              About
            </Button>
            <Stack direction="row" spacing={3}>
              <Button
                component={Link}
                to="/Login"
                variant="outlined"
                sx={{
                  color: "redRYB.main",
                  borderColor: "redRYB.main",
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "redRYB.main",
                    borderColor: "white",
                    color: "white",
                  },
                }}
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/Register"
                variant="contained"
                sx={{
                  backgroundColor: "redRYB.main",
                  color: "white",
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "redRYB.main",
                  },
                }}
                startIcon={<AppRegistrationIcon />}
              >
                Register
              </Button>
            </Stack>
          </Stack>
          <IconButton
            onClick={() => setIsOpen(true)}
            color="richBlack"
            size="large"
            sx={{
              display: { md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            bgcolor: "rgba(33, 33, 33, 0.7)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Stack
            spacing={8}
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ModalNavButton
              component={NavLink}
              to="/"
              onClick={() => setIsOpen(false)}
              color="cultured"
              sx={{
                borderBottomColor: activeRoutes.home && "redRYB.main",
              }}
              startIcon={<HomeIcon style={{ fontSize: 35 }} />}
              end
            >
              Home
            </ModalNavButton>
            <ModalNavButton
              component={NavLink}
              to="/About"
              onClick={() => setIsOpen(false)}
              color="cultured"
              sx={{
                borderBottomColor: activeRoutes.exercises && "redRYB.main",
              }}
              startIcon={<MoreHorizIcon style={{ fontSize: 35 }} />}
            >
              About
            </ModalNavButton>
            <ModalNavButton
              variant="outlined"
              sx={{
                color: "redRYB.main",
                borderColor: "redRYB.main",
                mx: 1,
                "&:hover": {
                  backgroundColor: "redRYB.main",
                  borderColor: "white",
                  color: "white",
                },
              }}
              startIcon={<LoginIcon style={{ fontSize: 35 }} />}
            >
              Login
            </ModalNavButton>
            <ModalNavButton
              variant="contained"
              sx={{
                backgroundColor: "redRYB.main",
                color: "white",
                mx: 1,
                "&:hover": {
                  backgroundColor: "redRYB.main",
                },
              }}
              startIcon={<AppRegistrationIcon style={{ fontSize: 35 }} />}
            >
              Register
            </ModalNavButton>
          </Stack>
        </Modal>
      </Stack>
    </Box>
  );
};

export default Navbar;
