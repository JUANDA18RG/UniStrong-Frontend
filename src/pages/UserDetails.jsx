import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Typography, Stack, Box } from "@mui/material";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState("");  // Para el nuevo nombre
  const [newPhoneNumber, setNewPhoneNumber] = useState("");  // Para el nuevo teléfono
  const [currentPassword, setCurrentPassword] = useState("");  // Para la contraseña actual
  const [newPassword, setNewPassword] = useState("");  // Para la nueva contraseña
  const [confirmNewPassword, setConfirmNewPassword] = useState("");  // Para confirmar la nueva contraseña
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/${id}`)
      .then((response) => {
        setUserData(response.data);
        setNewName(response.data.name);
        setNewPhoneNumber(response.data.phoneNumber);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los datos del usuario");
        setLoading(false);
      });
  }, [id]);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneNumberChange = (event) => setNewPhoneNumber(event.target.value);
  const handleCurrentPasswordChange = (event) => setCurrentPassword(event.target.value);
  const handleNewPasswordChange = (event) => setNewPassword(event.target.value);
  const handleConfirmNewPasswordChange = (event) => setConfirmNewPassword(event.target.value);

  const handleSave = () => {
    // Validación de campos
    if (newPassword && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(newPassword)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("La nueva contraseña y la confirmación deben coincidir.");
      return;
    }

    // Construir el objeto de datos a actualizar
    const updateData = {};
    if (newName) updateData.name = newName;
    if (newPhoneNumber) updateData.phoneNumber = newPhoneNumber;
    if (newPassword) updateData.password = newPassword;

    // Enviar los cambios al backend
    axios
      .patch(`http://localhost:3001/user/editar_perfil/${id}`, updateData)
      .then((response) => {
        setUserData(response.data);
        setError(null);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        setError("Error al actualizar los datos");
      });
  };

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ padding: 4 }}>
      <Stack spacing={3} sx={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
        <Typography variant="h5">Detalles del Usuario</Typography>

        {/* Nombre */}
        <TextField
          label="Nombre"
          value={newName}
          onChange={handleNameChange}
          fullWidth
          variant="outlined"
        />

        {/* Teléfono */}
        <TextField
          label="Número de Teléfono"
          value={newPhoneNumber}
          onChange={handlePhoneNumberChange}
          fullWidth
          variant="outlined"
        />

        {/* Contraseña Actual */}
        <TextField
          label="Contraseña Actual"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          type="password"
          fullWidth
          variant="outlined"
        />

        {/* Nueva Contraseña */}
        <TextField
          label="Nueva Contraseña"
          value={newPassword}
          onChange={handleNewPasswordChange}
          type="password"
          fullWidth
          variant="outlined"
        />

        {/* Confirmar Nueva Contraseña */}
        <TextField
          label="Confirmar Nueva Contraseña"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
          type="password"
          fullWidth
          variant="outlined"
        />

        {/* Botón de Guardar Cambios */}
        <Button variant="contained" color="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>

        {/* Mensaje de éxito */}
        {success && (
          <Typography color="success.main">¡Datos actualizados exitosamente!</Typography>
        )}

        {/* Datos adicionales */}
        <Typography variant="body1">Correo: {userData.email}</Typography>
        <Typography variant="body1">Teléfono: {userData.phoneNumber}</Typography>
      </Stack>
    </Box>
  );
};

export default UserDetails;
