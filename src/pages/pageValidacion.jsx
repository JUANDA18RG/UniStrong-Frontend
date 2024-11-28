import React, { useState, useEffect } from "react";
import { Modal, Stack, Button, Typography } from "@mui/material";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import axios from "axios"; // Importar axios para hacer la solicitud HTTP

const PageValidacion = () => {
  const { User } = useAuth(); // Obtener el usuario logueado
  const [loading, setLoading] = useState(false); // Para controlar el estado de la solicitud
  const [message, setMessage] = useState(""); // Para mostrar mensajes de éxito o error
  const [verified, setVerified] = useState(false); // Para saber si el código fue verificado
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleSendVerificationEmail = async () => {
    if (!User?.email) {
      setMessage("No se encontró el correo electrónico del usuario.");
      return;
    }

    setLoading(true); // Activar el estado de carga
    try {
      // Hacer la solicitud al backend para enviar el correo de verificación
      const response = await axios.post(
        "http://localhost:3001/verification/send-email",
        {
          email: User.email,
        }
      );

      if (response.status === 200) {
        setMessage("Correo de verificación enviado con éxito.");
      } else {
        setMessage("Hubo un problema al enviar el correo.");
      }
    } catch (error) {
      console.error("Error al enviar el correo de verificación:", error);
      setMessage("Hubo un error al enviar el correo de verificación.");
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  const handleVerifyCode = async (token) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/verification/verify-email?token=${token}`
      );

      if (response.status === 200 && response.data.pass) {
        setVerified(true); // Marcar como verificado
        setMessage("Correo verificado correctamente.");
      } else {
        setMessage("El código de verificación no es válido.");
      }
    } catch (error) {
      console.error("Error al verificar el código:", error);
      setMessage("Hubo un error al verificar el código.");
    }
  };

  useEffect(() => {
    // Extraer el token de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      handleVerifyCode(token); // Verificar código al cargar la página si tiene token
    }
  }, []);

  return (
    <Modal
      open={true} // Siempre abierto si no está verificado
      hideBackdrop={false}
      sx={{
        bgcolor: "rgba(33, 33, 33, 0.7)", // Fondo oscuro
        backdropFilter: "blur(5px)", // Efecto de desenfoque
      }}
    >
      <Stack
        spacing={3}
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)", // Centrar el modal
          bgcolor: "#000", // Fondo negro
          padding: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 320,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="white">
          Verificar Correo Electrónico
        </Typography>

        {/* Mostrar correo del usuario en la parte superior */}
        <Typography variant="h6" color="white">
          {User?.email}{" "}
          {/* Asegúrate de que "User" tenga la propiedad "email" */}
        </Typography>

        <Typography variant="body2" color="white" sx={{ marginBottom: 2 }}>
          Por favor, verifica tu correo electrónico antes de continuar.
        </Typography>

        {/* Mostrar el mensaje de estado */}
        {message && (
          <Typography
            variant="body2"
            color={
              message.includes("éxito") || message.includes("verificado")
                ? "green"
                : "red"
            }
            sx={{ marginBottom: 2 }}
          >
            {message}
          </Typography>
        )}

        {/* Si el código ha sido verificado, quitar el botón */}
        {!verified && (
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              width: "80%",
              alignSelf: "center", // Centra el botón horizontalmente
              borderRadius: "20px", // Bordes redondeados
              backgroundColor: "#E5533D", // Color naranja
              ":hover": {
                backgroundColor: "#C4452F", // Naranja más oscuro al pasar el cursor
              },
            }}
            onClick={handleSendVerificationEmail} // Enviar el correo cuando se haga clic en el botón
            disabled={loading} // Deshabilitar el botón mientras se está enviando el correo
          >
            {loading ? "Enviando..." : "Enviar Correo de Verificación"}
          </Button>
        )}

        {/* Botón de Ir a Inicio, solo visible si el correo ha sido verificado */}
        {verified && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "80%",
              alignSelf: "center", // Centra el botón horizontalmente
              borderRadius: "20px", // Bordes redondeados
              backgroundColor: "#E5533D", // Color naranja (igual que el anterior)
              ":hover": {
                backgroundColor: "#C4452F", // Naranja más oscuro al pasar el cursor
              },
              marginTop: 2, // Espacio entre los botones
            }}
            onClick={() => navigate("/Login")} // Redirige al inicio usando navigate
          >
            Ir a Inicio
          </Button>
        )}
      </Stack>
    </Modal>
  );
};

export default PageValidacion;
