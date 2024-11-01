import { useState } from 'react'; 
import { Modal, Stack, Typography, TextField, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';

const DeactivateAccount = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [showReactivationMessage, setShowReactivationMessage] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState(''); 
  const { signout } = useAuth();
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDeactivateAccount = () => {
    if (password === 'usuario123') {
      setOpenConfirmation(true);
    } else {
      setSnackbarMessage('Contraseña incorrecta'); 
      setSnackbarOpen(true); 
    }
  };

  const confirmDeactivation = async () => {
    setShowReactivationMessage(true);
    setOpenConfirmation(false);
    handleClose();
    setTimeout(() => {
      CerrarSesion();
    }, 4000); 
  };
  
  const CerrarSesion = async () => {
    try {
      await signout(); 
      navigate('/login'); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  

  const handleCancel = () => {
    setOpenConfirmation(false);
    handleClose();
    setPassword(''); // Limpiar el campo de contraseña al cancelar
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Cerrar Snackbar
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} sx={{ bgcolor: "rgba(33, 33, 33, 0.7)", backdropFilter: "blur(4px)" }}>
        <Stack
          spacing={3}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            padding: 4,
            borderRadius: 3,
            boxShadow: 24,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleClose} aria-label="Cerrar">
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Ingresa tu contraseña
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: 'center' }}>
            Para desactivar tu cuenta, por favor ingresa tu contraseña actual.
          </Typography>

          <TextField
            label="Contraseña actual"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            autoComplete="current-password"
          />

          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={handleDeactivateAccount}
            sx={{ padding: "10px", fontWeight: 'bold', textTransform: 'none' }}
          >
            Confirmar Desactivación
          </Button>
        </Stack>
      </Modal>

      <Dialog
        open={openConfirmation}
        onClose={handleCancel}
        PaperProps={{ sx: { borderRadius: 3, padding: 2, maxWidth: 400, width: '100%' } }}
      >
        <DialogTitle>¿Desactivar cuenta?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas desactivar tu cuenta? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmDeactivation} color="error" variant="contained">
            Desactivar
          </Button>
        </DialogActions>
      </Dialog>

      {showReactivationMessage && (
        <Modal open={showReactivationMessage} onClose={() => setShowReactivationMessage(false)} sx={{ bgcolor: "rgba(33, 33, 33, 0.7)", backdropFilter: "blur(4px)" }}>
          <Stack
            spacing={3}
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              padding: 4,
              borderRadius: 3,
              boxShadow: 24,
              maxWidth: 400,
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Cuenta Desactivada
            </Typography>

            <Typography variant="body1" sx={{ textAlign: 'center', color: 'warning.main' }}>
              Para reactivar su cuenta, debe iniciar sesión dentro de un plazo de 30 días. 
              De no hacerlo, su cuenta será eliminada de forma permanente.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={CerrarSesion}
              sx={{ padding: "10px", fontWeight: 'bold', textTransform: 'none' }}
            >
              Cerrar
            </Button>
          </Stack>
        </Modal>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <Button color="inherit" onClick={handleSnackbarClose}>
            Cerrar
          </Button>
        }
      />
    </>
  );
};

export default DeactivateAccount;
