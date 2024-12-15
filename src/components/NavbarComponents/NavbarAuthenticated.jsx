import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import DiasDeMembresia from "../../pages/Client/DiasdeMembresia.jsx";

import {
  Stack,
  IconButton,
  Modal,
  Button,
  styled,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useAuth } from "../../context/authContext";
import { useSnackbar } from "notistack";

import HomeIcon from "@mui/icons-material/Home";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { signout, User, typeUser } = useAuth();
  const [currentDate, setCurrentDate] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const userId = User?.id;

  const goToSettings = () => {
    setIsOpen(false);
    navigate("/settings");
  };

  const CerrarSesion = async () => {
    const response = await signout();
    if (response && response.status === 200) {
      enqueueSnackbar("Cierre de sesión exitoso", {
        variant: "success",
      });
      navigate("/Login", { replace: true });
    } else {
      enqueueSnackbar("Error al cerrar sesión", {
        variant: "error",
      });
    }
    setIsOpen(false);
  };




  const handleRedirection = () => {
    console.log("Redireccionando, tipo de usuario:", typeUser);
    if (typeUser) {
      switch (typeUser) {
        case "cliente":
          navigate("/cliente", { replace: true });
          break;
        case "coach":
          navigate("/coach", { replace: true });
          break;
        case "nutriologo":
          navigate("/nutriologo", { replace: true });
          break;
        case "admin":
          navigate("/admin", { replace: true });
          break;
        default:
          navigate("/", { replace: true });
          break;
      }
      setIsOpen(false);
    } else {
      console.error("Tipo de usuario no definido");
    }
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ flexGrow: 1, justifyContent: "flex-start" }}
      >
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
        
        <Typography variant="subtitle1" component="p" sx={{ marginBottom: 1 }} />

          {/* Dias de membresia */}
         {typeUser === "cliente" && (
         <Typography variant="subtitle1" component="p">
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: "redRYB.main" }}
          >
            <DiasDeMembresia userId={User.id} />
          </Typography>
        </Typography>
      )}
     

      </Stack>
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
            <Avatar
              sx={{
                width: 35,
                height: 35,
                bgcolor: "redRYB.main",
              }}
            >
              {User.username.charAt(0)}
            </Avatar>
            <Typography
              variant="h6"
              sx={{ color: "redRYB.main", fontWeight: 600, marginLeft: 1 }}
            >
              {User.username}
            </Typography>
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
            onClick={handleRedirection}
            color="cultured"
            startIcon={<HomeIcon style={{ fontSize: 35 }} />}
          >
            Inicio
          </ModalNavButton>
          {typeUser === "cliente" && (
            <ModalNavButton
              component={NavLink}
              to={`/user/${User.id}`}
              onClick={() => setIsOpen(false)}
              color="cultured"
              startIcon={<AccountCircleIcon style={{ fontSize: 35 }} />}
            >
              Perfil
            </ModalNavButton>
          )}
          <ModalNavButton
            onClick={goToSettings}
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
