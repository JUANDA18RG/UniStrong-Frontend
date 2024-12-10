import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { diasDeMembresia } from "../../api/Ejericios";

const DiasDeMembresia = ({ userId }) => {
  const [diasMembresía, setDíasMembresía] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDíasDeMembresía = async () => {
      console.log("userId:", userId);
      if (!userId) {
        setError('El ID de usuario es inválido');
        return;
      }
      try {
        const response = await diasDeMembresia(userId);
        if (response?.data) {
          const { remainingDays, message } = response.data;
          setDíasMembresía(remainingDays);
          setMensaje(message);
          if (remainingDays < 0) {
            setMensaje("La membresía ya está vencida.");
          }
        } else {
          setError("No se recibió la respuesta esperada.");
        }
      } catch (err) {
        setError("Error al obtener los días de membresía.");
        console.error("Error al obtener los días de membresía:", err.response ? err.response.data : err.message);
      }
    };
    obtenerDíasDeMembresía();
  }, [userId]);

  return (
    <div>
      {error ? (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      ) : (
        <Typography variant="subtitle1" component="p" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              color: 'black',
            }}
          >
            Días de membresía:{" "}
          </Typography>
          
        <Typography
        variant="subtitle1"
        component="span"
        sx={{
          color: (diasMembresía !== null && !isNaN(diasMembresía) && diasMembresía < 0) ? 'red' : 'black',
          fontWeight: 'bold',
          marginLeft: 1,
          
        }}
      >
        {diasMembresía !== null ? diasMembresía : "Cargando..."}
      </Typography>
       </Typography>
      )}
      {mensaje && (
        <Typography variant="subtitle2" color="textSecondary">
          {mensaje}
        </Typography>
      )}
    </div>
  );
};

export default DiasDeMembresia;

