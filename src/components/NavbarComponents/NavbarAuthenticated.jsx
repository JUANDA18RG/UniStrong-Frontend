import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Stack, IconButton, Modal, Button, styled } from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
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

const NavbarAuthenticated = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <IconButton color="richBlack" onClick={() => setIsOpen(true)}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
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
            to="/profile"
            onClick={() => setIsOpen(false)}
            color="cultured"
            startIcon={<AccountCircleIcon style={{ fontSize: 35 }} />}
          >
            Perfil
          </ModalNavButton>
          <ModalNavButton
            component={NavLink}
            to="/settings"
            onClick={() => setIsOpen(false)}
            color="cultured"
            startIcon={<SettingsIcon style={{ fontSize: 35 }} />}
          >
            Configuración
          </ModalNavButton>
          <ModalNavButton
            component={Link}
            to="/logout"
            onClick={() => setIsOpen(false)}
            color="cultured"
            startIcon={<LogoutIcon style={{ fontSize: 35 }} />}
          >
            Cerrar Sesión
          </ModalNavButton>
        </Stack>
      </Modal>
    </>
  );
};

export default NavbarAuthenticated;
