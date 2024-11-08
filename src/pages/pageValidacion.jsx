import React, { useState, useEffect } from 'react';
import { Modal, Stack, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Para redirección
import { useAuth } from '../context/authContext';


const PageValidacion = () => {

  return (
    <Modal
      open={true} // Siempre abierto si no está verificado
      hideBackdrop={false}
      sx={{
        bgcolor: 'rgba(33, 33, 33, 0.7)', // Fondo oscuro
        backdropFilter: 'blur(5px)', // Efecto de desenfoque
      }}
    >
      <Stack
        spacing={3}
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)', // Centrar el modal
          bgcolor: '#000', // Fondo negro
          padding: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 320,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" color="white">
          Verificar Correo Electrónico
        </Typography>

        <Typography variant="body2" color="white" sx={{ marginBottom: 2 }}>
          Por favor, verifica tu correo electrónico antes de continuar.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            width: '80%',
            alignSelf: 'center', // Centra el botón horizontalmente
            borderRadius: '20px', // Bordes redondeados
            backgroundColor: '#E5533D', // Color naranja
            ':hover': {
              backgroundColor: '#C4452F', // Naranja más oscuro al pasar el cursor
            },
          }}
          
        >
          Enviar Correo de Verificación
        </Button>
      </Stack>
    </Modal>
  );
};

export default PageValidacion;

