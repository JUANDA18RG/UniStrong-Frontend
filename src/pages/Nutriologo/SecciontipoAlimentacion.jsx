import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const tiposDeAlimentacion = [
  {
    tipo: "Vegetariana",
    imagen:
      "https://www.eluniverso.com/resizer/v2/WSMRZIME6VGIPII6VOWT5RXMZE.jpg?auth=845c14993f6e9f9dc751fc9fba1b41914c36013b0b513ce447434f573e6cf838&width=1005&height=670&quality=75&smart=true", // Asegúrate de tener esta imagen en tu proyecto
    descripcion: "Una dieta basada en plantas y productos vegetales.",
  },
  {
    tipo: "Keto",
    imagen: "https://i.blogs.es/f8becb/keto2/1366_2000.jpg", // Asegúrate de tener esta imagen en tu proyecto
    descripcion: "Una dieta baja en carbohidratos y alta en grasas.",
  },
  {
    tipo: "Mediterránea",
    imagen:
      "https://s3.abcstatics.com/media/bienestar/2020/02/13/dieta-mediterranea-krKH--1248x698@abc.jpg", // Asegúrate de tener esta imagen en tu proyecto
    descripcion:
      "Una dieta rica en frutas, verduras, pescado y aceite de oliva.",
  },
];

const usuarios = ["Usuario 1", "Usuario 2", "Usuario 3"]; // Lista de usuarios

function SecciontipoAlimentacio() {
  const [open, setOpen] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [form, setForm] = useState({
    peso: "",
    objetivo: "",
    consejos: "",
    usuario: "",
  });

  const handleOpen = (tipo) => {
    setSelectedTipo(tipo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTipo(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (e) => {
    setForm({ ...form, usuario: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Consejos nutricionales:", form);
    handleClose();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: "center", color: "redRYB.main" }}
      >
        Tipos de Alimentación
      </Typography>
      <Grid container spacing={4}>
        {tiposDeAlimentacion.map((tipo) => (
          <Grid item xs={12} md={4} key={tipo.tipo}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={tipo.imagen}
                alt={tipo.tipo}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  {tipo.tipo}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {tipo.descripcion}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleOpen(tipo.tipo)}
                  sx={{
                    mt: "auto",
                    color: "white",
                    backgroundColor: "redRYB.main",
                    "&:hover": { backgroundColor: "redPigment.main" },
                  }}
                >
                  Dar Consejos
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Consejos Nutricionales para {selectedTipo}
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="usuario-label">Usuario</InputLabel>
            <Select
              labelId="usuario-label"
              value={form.usuario}
              label="Usuario"
              onChange={handleSelectChange}
            >
              {usuarios.map((usuario) => (
                <MenuItem key={usuario} value={usuario}>
                  {usuario}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Peso (kg)"
            type="number"
            fullWidth
            name="peso"
            value={form.peso}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Objetivo"
            type="text"
            fullWidth
            name="objetivo"
            value={form.objetivo}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Consejos"
            type="text"
            fullWidth
            name="consejos"
            value={form.consejos}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "redRYB.main",
              "&:hover": { backgroundColor: "redPigment.main" },
            }}
            onClick={handleSubmit}
            fullWidth
          >
            Enviar Consejos
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default SecciontipoAlimentacio;
