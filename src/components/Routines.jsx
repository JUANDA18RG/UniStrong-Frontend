import React, { useState, useEffect } from 'react';
import {FitnessCenter } from '@mui/icons-material';
import { Card, Grid, CardContent, Typography, Stack, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { ObtenerRutinas } from "../api/Ejericios";

const Routines = () => {
  
  const [selectedRutina, setSelectedRutina] = useState(null);
  const [rutinas, setRutinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleCardClick = (rutina) => {
    setSelectedRutina(rutina);
    setDialogOpen(true);  
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false) 
  };

  
  
  const obtenerRutinas = async () => {
    setLoading(true);
    try {
      const response = await ObtenerRutinas();
      const responseData = response.data;
      if (Array.isArray(responseData)) {
        console.log('Rutinas:', response);
        console.log('Rutinas obtenidas:', responseData);
        setRutinas(responseData);
      } else {
        console.error('La respuesta no es un arreglo válido:', response);
      }
    } catch (error) {
      console.error('Error al obtener rutinas:', error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    obtenerRutinas();
  }, []);

  return (
    <>
      <Stack
        spacing={3}
        sx={{
          padding: 5,
          minHeight: '100vh',
          backgroundColor: 'common.black',
          paddingTop: '100px',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom color="redRYB.main"
          sx={{ marginTop: '50px' }}
        >
          Biblioteca de Rutinas
        </Typography>
        <Stack
          sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'white',
            padding: 5,
            borderRadius: '8px',
            marginTop: '20px',
          }}
        >
          {loading ? (
            <Typography variant="h6"  gutterBottomcolor="redRYB.main"
             sx={{ textAlign: 'center'}}>
              Cargando rutinas...
            </Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {rutinas.length === 0 ? (
                <Grid item xs={12}>
                  <Typography variant="h5"  gutterBottom
                   color="redRYB.main" sx={{ textAlign: 'center'}}>
                    No se encontraron rutinas
                  </Typography>
                </Grid>
              ) : (
                rutinas.map((rutina) => (
                  <Grid item xs={12} sm={6} md={3} key={rutina.id}>
                    <Card
                      sx={{
                        maxWidth: 360,
                        boxShadow: 4,
                        borderRadius: 1,
                        border: '2px solid',
                        borderColor: "redRYB.main",
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          boxShadow: 6,
                          transform: 'scale(1.05)',
                        },
                      }}
                      onClick={() => handleCardClick(rutina)}
                    >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                    <FitnessCenter sx={{ fontSize: 30, marginBottom: 1, color: 'redRYB.main' }} />
                    <Typography
                      variant="h5"
                      sx={{fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem',marginBottom: 1,}}
                    >
                    {rutina.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{color: 'black',textAlign: 'center', fontSize: '1.25rem', marginBottom: 2, fontStyle: 'italic',}}
                    >
                      {rutina.category}
                    </Typography>
                  </CardContent>
                   </Card>
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Stack>
        {/* Detalles*/}
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle  gutterBottom  color="redRYB.main" sx={{ fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'center' }}>
            {selectedRutina?.name}
          </DialogTitle>
          <DialogContent sx={{ padding: 3, minWidth: 400 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1rem', color: '#555', marginBottom: 2}}>
            <strong>Descripción:</strong> {selectedRutina?.description}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '1rem', color: '#555', marginBottom: 2 }}>
            <strong>Categoría:</strong> {selectedRutina?.category}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '1rem', color: '#555', marginBottom: 1 }}>
            <strong>Músculos trabajados:</strong>
            <ul>
              {selectedRutina?.musclesWorked?.map((muscle, index) => (
                <li key={index}>{muscle}</li>
              ))}
            </ul>
          </Typography>
          </DialogContent>
          <DialogActions sx={{ padding: 2, justifyContent: 'center'}}>
            <Button
              onClick={handleCloseDialog}  
              color="primary"
              variant="contained"
              sx={{ borderRadius: '18px', padding: '6px 16px', backgroundColor: 'redRYB.main',
                '&:hover': {
                  backgroundColor: 'darkred', 
                }
              }}
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </>
  );
};

export default Routines;


