import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button, IconButton, Modal, Stack, styled } from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  MoreHoriz as MoreHorizIcon,
  Login as LoginIcon,
  AppRegistration as AppRegistrationIcon,
} from "@mui/icons-material";

const ModalNavButton = styled(Button)(({ theme }) => ({
  borderBottom: "3px solid transparent",
  fontSize: 28,
  fontWeight: 300,
  transition: theme.transitions.create("transform"),
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const NavbarNotAuthenticated = ({ activeRoutes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={5}
        sx={{
          flexGrow: 1,
          justifyContent: "flex-end",
          display: { xs: "none", md: "flex" },
        }}
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
            component={Link}
            to="/Login"
            variant="outlined"
            onClick={() => setIsOpen(false)}
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
            component={Link}
            to="/Register"
            variant="contained"
            onClick={() => setIsOpen(false)}
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
    </>
  );
};

export default NavbarNotAuthenticated;
