import { m } from "framer-motion";
import { useState } from "react";
import { varBounce } from "../components/animate/variants/bounce";
import { Box, Modal, Typography, Button, Alert, Backdrop } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import Banner from "../assets/images/DescansoGym.jpeg";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "#FFFF",
  borderRadius: "24px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
  display: "flex",
};

const leftSideStyle = {
  flex: 1,
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightSideStyle = {
  flex: 1,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

function ModaSesion({ open }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <m.div variants={varBounce().in}>
          <Box sx={style}>
            {/* Lado izquierdo con la imagen */}
            <Box sx={leftSideStyle} />

            {/* Lado derecho con el contenido */}
            <Box sx={rightSideStyle}>
              {/* Imagen del logo ajustada */}
              <m.div variants={varBounce().in}>
                <Box sx={{ mb: 1 }}>
                  <Box
                    component="img"
                    src={Logo}
                    alt="Logo"
                    sx={{
                      width: { xs: 80, md: 90 },
                      height: { xs: 80, md: 90 },
                      mb: 2,
                    }}
                  />
                </Box>
              </m.div>

              {/* Alerta de éxito */}
              <m.div variants={varBounce().in}>
                <Alert
                  severity="success"
                  sx={{ mb: 2, borderRadius: "12px", fontSize: "1.1rem" }}
                >
                  Tu sesión ha caducado
                </Alert>
              </m.div>

              {/* Texto de bienvenida */}
              <m.div variants={varBounce().in}>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{
                    mb: 2,
                    fontWeight: 400,
                    color: "#555",
                  }}
                >
                  Por favor, inicia sesión de nuevo para continuar disfrutando
                  de nuestros servicios de entrenamiento.
                </Typography>
              </m.div>

              {/* Botón mejorado */}
              <m.div variants={varBounce().in}>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#FF2625",
                    "&:hover": {
                      backgroundColor: "#E62121",
                    },
                    borderRadius: "50px",
                    px: 4,
                    py: 1.2,
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  onClick={handleClose}
                >
                  Continuar
                </Button>
              </m.div>
            </Box>
          </Box>
        </m.div>
      </Modal>
    </Box>
  );
}

export default ModaSesion;
