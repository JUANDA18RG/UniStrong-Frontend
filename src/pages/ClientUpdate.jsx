import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ClientUpdate = () => {
  const { id } = useParams();  // Tomamos el ID del cliente desde la URL
  const navigate = useNavigate();

  // Estado para los datos del cliente
  const [clientData, setClientData] = useState({
    birthDate: '',
    height: '',
    diseases: '',
  });

  // Estado para manejar los errores y la carga
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Efecto para cargar los datos del cliente al cargar el componente
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/client/${id}`);
        setClientData({
          birthDate: response.data.birthDate,
          height: response.data.height,
          diseases: response.data.diseases.join(', '),  // Suponiendo que es un array
        });
      } catch (err) {
        setError('Error al obtener los datos del cliente');
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [id]);

  // Función para manejar el cambio de los inputs
  const handleChange = (e) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar la actualización de los datos
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Crear objeto de datos para enviar en la solicitud PATCH
    const updateData = {
      birthDate: clientData.birthDate,
      height: clientData.height,
      diseases: clientData.diseases.split(',').map(disease => disease.trim()), // Convertir a array
    };

    try {
      setLoading(true);
      await axios.patch(`http://localhost:3001/client/editar_perfil_client/${id}`, updateData);
      navigate(`/user/${id}`);  // Navegar a la vista de detalles del usuario
    } catch (err) {
      setError('Error al actualizar los datos del cliente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Actualizar Datos del Cliente
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleUpdate}>
        <TextField
          label="Fecha de Nacimiento"
          type="date"
          name="birthDate"
          value={clientData.birthDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Altura (en cm)"
          type="number"
          name="height"
          value={clientData.height}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enfermedades"
          name="diseases"
          value={clientData.diseases}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText="Separar con coma"
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ marginTop: 2 }}
        >
          {loading ? 'Actualizando...' : 'Actualizar Datos'}
        </Button>
      </form>
    </Box>
  );
};

export default ClientUpdate;
