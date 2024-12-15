import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSnackbar } from "notistack";

function MostrarDieta() {
  const { enqueueSnackbar } = useSnackbar(); // Llamar a useSnackbar para mostrar notificaciones

  const [clientes, setClientes] = useState([]);
  const [dietas, setDietas] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState("");

  // Cargar los clientes desde la API
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3001/client");
        if (response.ok) {
          const data = await response.json();
          setClientes(data);
        } else {
          enqueueSnackbar("Error al cargar los clientes", { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("Error de conexión con los clientes", { variant: "error" });
      }
    };

    fetchClientes();
  }, [enqueueSnackbar]);

  // Cargar las dietas del cliente seleccionado
  useEffect(() => {
    if (clienteSeleccionado) {
      const fetchDietas = async () => {
        try {
          const response = await fetch(
            `http://localhost:3001/diet/getDietByClient/${clienteSeleccionado}`
          );
          if (response.ok) {
            const data = await response.json();
            setDietas(data);
          } else {
            enqueueSnackbar("Error al cargar las dietas", { variant: "error" });
          }
        } catch (error) {
          enqueueSnackbar("Error de conexión con las dietas", { variant: "error" });
        }
      };

      fetchDietas();
    }
  }, [clienteSeleccionado, enqueueSnackbar]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", p: 4 }}>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card sx={{ width: "100%", maxWidth: "600px", p: 4, boxShadow: "0 8px 16px rgba(0,0,0,0.5)", borderRadius: "16px", backgroundColor: "white" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "redRYB.main", textAlign: "center" }}>
            Mostrar Dieta
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 2 }}>
            Selecciona un cliente para ver su dieta asignada
          </Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="cliente-label">Cliente</InputLabel>
            <Select
              labelId="cliente-label"
              value={clienteSeleccionado}
              label="Cliente"
              onChange={(e) => setClienteSeleccionado(e.target.value)}
            >
              {clientes.map((cliente) => (
                <MenuItem key={cliente.id} value={cliente.id}>
                  {cliente.user.email} - {cliente.user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {dietas.length > 0 ? (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "redRYB.main" }}>
                Dietas Asignadas
              </Typography>
              <Grid container spacing={2}>
                {dietas.map((dieta) => (
                  <Grid item xs={12} key={dieta.id}>
                    <Card sx={{ p: 2, boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "8px" }}>
                      <Typography variant="h6">{dieta.name}</Typography>
                      <Typography variant="body2">{dieta.description}</Typography>
                      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        Tipo: {dieta.type}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              No se han asignado dietas a este cliente.
            </Typography>
          )}
        </Card>
      </Box>
    </Box>
  );
}

export default MostrarDieta;
