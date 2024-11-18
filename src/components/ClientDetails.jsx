import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Typography, Stack, Box } from "@mui/material";
import axios from "axios";

const ClientDetails = () => {
  const { id } = useParams(); // Obtener el id del cliente desde los parámetros de la URL
  const [clientData, setClientData] = useState(null);
  const [birthDate, setBirthDate] = useState(""); // Fecha de nacimiento
  const [height, setHeight] = useState(""); // Altura
  const [diseases, setDiseases] = useState(""); // Enfermedades
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Cargar los datos del cliente desde el backend
    axios
      .get(`http://localhost:3001/clients/${id}`) // Endpoint para obtener los datos del cliente
      .then((response) => {
        setClientData(response.data);
        setBirthDate(response.data.birthDate);
        setHeight(response.data.height);
        setDiseases(response.data.diseases.join(", ")); // Asumimos que las enfermedades son un array
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los datos del cliente");
        setLoading(false);
      });
  }, [id]);

  // Funciones para manejar los cambios en los campos
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleDiseasesChange = (e) => setDiseases(e.target.value);

  const handleSave = () => {
    // Crear un objeto con los datos a actualizar
    const updateData = {
      birthDate,
      height,
      diseases: diseases.split(",").map((disease) => disease.trim()), // Convertir enfermedades a un array
    };

    // Enviar la actualización al backend
    axios
      .patch(`http://localhost:3001/clients/editar_perfil_client/${id}`, updateData) // Endpoint para actualizar los datos
      .then((response) => {
        setClientData(response.data);
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
        <Typography variant="h5">Detalles del Cliente</Typography>

        {/* Fecha de nacimiento */}
        <TextField
          label="Fecha de Nacimiento"
          type="date"
          value={birthDate}
          onChange={handleBirthDateChange}
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Altura */}
        <TextField
          label="Altura"
          type="number"
          value={height}
          onChange={handleHeightChange}
          fullWidth
          variant="outlined"
        />

        {/* Enfermedades */}
        <TextField
          label="Enfermedades"
          value={diseases}
          onChange={handleDiseasesChange}
          fullWidth
          variant="outlined"
          helperText="Separa las enfermedades con coma"
        />

        {/* Botón de Guardar Cambios */}
        <Button variant="contained" color="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>

        {/* Mensaje de éxito */}
        {success && (
          <Typography color="success.main">¡Datos actualizados exitosamente!</Typography>
        )}

        {/* Mostrar datos actuales */}
        <Typography variant="body1">Fecha de Nacimiento: {clientData.birthDate}</Typography>
        <Typography variant="body1">Altura: {clientData.height} cm</Typography>
        <Typography variant="body1">Enfermedades: {clientData.diseases.join(", ")}</Typography>
      </Stack>
    </Box>
  );
};

export default ClientDetails;
