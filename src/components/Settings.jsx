import { useState } from 'react';
import { Typography, Stack, styled, Button, Divider } from '@mui/material';
import { PowerSettingsNew as PowerIcon } from '@mui/icons-material'; // Nuevo icono
import DeactivateAccount from '../components/DeactivateAccount';

const ModalNavButton = styled(Button)(({ theme }) => ({
  color: "#000", // Color negro del texto
  backgroundColor: "#fff", // Fondo blanco
  fontSize: 28,
  fontWeight: 300,
  borderBottom: "3px solid transparent",
  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const Settings = () => {
  const [openDeactivateModal, setOpenDeactivateModal] = useState(false);

  const handleOpenDeactivateModal = () => {
    setOpenDeactivateModal(true);
  };

  return (
    <>
      <Stack 
        spacing={3} 
        sx={{ 
          padding: 4, 
          minHeight: '100vh', 
          alignItems: 'center', 
          backgroundColor: '#f5f5f5' // Fondo gris claro
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ fontWeight: 'bold', letterSpacing: 1 }} 
        >
          CONFIGURACIÓN
        </Typography>

        {/* Separador entre el título y el contenido */}
        <Divider sx={{ width: '80%', margin: '20px 0' }} />

        {/* Botón para abrir el modal de desactivar cuenta con ícono de encendido/apagado */}
        <ModalNavButton
          onClick={handleOpenDeactivateModal}
          startIcon={<PowerIcon style={{ fontSize: 35 }} />} // Cambio de icono
        >
          Desactivar Cuenta
        </ModalNavButton>
      </Stack>

      {/* Componente que maneja la desactivación */}
      <DeactivateAccount
        open={openDeactivateModal}
        handleClose={() => setOpenDeactivateModal(false)}
      />
    </>
  );
};

export default Settings;
