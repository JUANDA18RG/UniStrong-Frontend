import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Stack,
  IconButton,
  Modal,
  Button,
  styled,
  Box,
  Typography,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useAuth } from "../../context/authContext";

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
  const { signout, User } = useAuth();

  const CerrarSesion = async () => {
    await signout();
    setIsOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <IconButton onClick={() => setIsOpen(true)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: "50%",
              border: "3px solid redRYB.main",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "redRYB.main", fontWeight: 600, marginRight: 1 }}
            >
              {User.username}
            </Typography>
            <AccountCircleIcon
              sx={{
                color: "redRYB.main",
              }}
              fontSize="large"
            />
          </Box>
        </IconButton>
      </Stack>
      <IconButton
        onClick={() => setIsOpen(true)}
        color="richBlack.main"
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
            onClick={CerrarSesion}
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
