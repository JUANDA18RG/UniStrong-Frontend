import { useState } from 'react';
import { Typography, Stack, styled, Button, Box } from '@mui/material';
import { PowerSettingsNew as PowerIcon } from '@mui/icons-material';
import DeactivateAccount from '../components/DeactivateAccount';

const ModalNavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[300],  
  fontSize: '1.25rem',
  fontWeight: 500,
  borderRadius: '30px',  
  padding: '12px 24px',  
  textTransform: 'none',
  transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.grey[400],  
    transform: 'scale(1.1)',  
    boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15)`,  
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
          padding: 5,
          minHeight: '100vh',
          alignItems: 'flex-start', 
          backgroundColor: '#003366',
          paddingTop: '100px',
        }}
      >  
        <Typography variant="h4" 
        gutterBottom color="redRYB.main"
         sx={{ marginTop: '50px' }}>
            Configuración
        </Typography>  

        <Stack
          sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'white', 
            padding: 5,
            borderRadius: '8px',
            marginTop: '500px', 
            marginBottom: '20px', 
          }}
        >
    
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
          <ModalNavButton
            onClick={handleOpenDeactivateModal}
            startIcon={<PowerIcon sx={{ fontSize: 20 }} />}
            sx={{
              width: '400px',  // Ajusta el ancho
              textOverflow: 'ellipsis', // Añade puntos suspensivos si el texto es largo
              padding: '10px 20px',
            }}
          >
            Desactivar Cuenta
          </ModalNavButton>
        </Box>


        </Stack>
      </Stack>
      <DeactivateAccount
        open={openDeactivateModal}
        handleClose={() => setOpenDeactivateModal(false)}
      />
    </>
  );
};

export default Settings;