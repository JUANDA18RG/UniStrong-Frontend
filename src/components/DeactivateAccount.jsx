import { useState } from 'react'; 
import { Modal, Stack, Typography, TextField, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../context/authContext";
import { useSnackbar } from "notistack";


const DeactivateAccount = ({ open, handleClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { signout, deactivateAccount } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleDeactivateAccount = async () => {
    if (!password) {
      enqueueSnackbar('La contraseña es obligatoria.', { variant: 'error' });
      setSnackbarOpen(true);
      return;
    }
    setOpenConfirmation(true);
  };

 
  const confirmDeactivation = async () => {
    try {
      const response = await deactivateAccount(password);
      console.log('Respuesta', response);  
      if (response?.status === 200 || response?.data?.success) {
        enqueueSnackbar('Cuenta desactivada con éxito', { variant: 'success', autoHideDuration: 5000 });
        signout(); 
        navigate('/login'); 
      } else {
        const errorMessage = response?.data?.message || 'Error desconocido';
        enqueueSnackbar(errorMessage, { variant: 'error' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Error desconocido';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      console.error(error);
    }
  };
  

  const handleCancel = () => {
    setOpenConfirmation(false);
    setPassword('');
    handleClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} sx={{ bgcolor: "rgba(33, 33, 33, 0.7)", backdropFilter: "blur(4px)" }}>
        <Stack spacing={3} sx={{ position: "absolute", left: "50%",
           top: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", 
           padding: 4, borderRadius: 3, boxShadow: 24, maxWidth: 400, width: "100%" }}>
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleClose} aria-label="Cerrar">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Ingresa tu contraseña</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: 'center' }}>Para desactivar tu cuenta, por favor ingresa tu contraseña actual.</Typography>
          <TextField
            name="password"
            label="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            type={passwordVisible ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#f4f4f9",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "blue" },
                "&.Mui-focused fieldset": { borderColor: "redRYB.main" },
                "&.Mui-error fieldset": { borderColor: "red" },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setPasswordVisible(!passwordVisible)} edge="end">
                    {passwordVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {passwordError && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
              {passwordError}
            </Typography>
          )}
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

      <Dialog open={openConfirmation} onClose={handleCancel} PaperProps={{ sx: { borderRadius: 3, padding: 2, maxWidth: 400, width: '100%' } }}>
        <DialogTitle>¿Desactivar cuenta?</DialogTitle>
        <DialogContent>
          <DialogContentText>¿Estás seguro de que deseas desactivar tu cuenta? Esta acción no se puede deshacer.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">Cancelar</Button>
          <Button onClick={confirmDeactivation} color="error" variant="contained">Desactivar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={errorMsg}
        action={<Button color="inherit" onClick={handleSnackbarClose}>Cerrar</Button>}
      />
    </>
  );
};
export default DeactivateAccount;
