import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography, Button, Grid } from "@mui/material";
import { membresiaRequest } from "../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function Membership() {
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const memberships = [
    {
      idMembership: 1,
      type: "Básica",
      price: "$50.000/mes",
      benefits: ["Acceso al gimnasio", "1 clase grupal por semana"],
    },
    {
      idMembership: 2,
      type: "Premium",
      price: "$100.000/mes",
      benefits: ["Acceso al gimnasio", "Clases grupales ilimitadas", "Acceso a sauna"],
    },
    {
      idMembership: 3,
      type: "VIP",
      price: "$150.000/mes",
      benefits: [
        "Acceso al gimnasio",
        "Clases grupales ilimitadas",
        "Acceso a sauna",
        "Entrenador personal",
      ],
    },
  ];

  const handleCardSelection = async (idMembership) => {
    if (!idMembership) {
      console.error("idMembership es indefinido o nulo.", idMembership );
      return; 
    }
    setLoading(true); 
    setSelectedId(idMembership);
    console.log("ID seleccionado:", idMembership);

    try {
      const response = await membresiaRequest(idMembership);
      console.log(response.data);
      enqueueSnackbar('Membresia elegida con exito...',{ variant: 'success'});
      navigate("/Cliente"); 
    
    } catch (error) {
      enqueueSnackbar('Error al elegir la membresía', { variant: 'error',});
      console.error("Error al actualizar la membresía:", error.response?.data || error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <Grid container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: { xs: 2, sm: 4 }, backgroundColor: "#f5f5f5" }}>
        <Grid container spacing={5} justifyContent="center" style={{ marginTop: "20px" }}>
          <Typography variant="h3" align="center" sx={{ width: "100%", marginBottom: 6, color: "#d32f2f", fontWeight: "bold", textTransform: "uppercase" }}>
            Elige tu Membresía
          </Typography>
          {memberships.map((membership) => (
            <Grid item xs={12} sm={6} md={4} key={membership.idMembership}>
              <Card
                variant="outlined"
                sx={{
                  borderColor: "#f44336",
                  borderWidth: 2,
                  maxWidth: 320,
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 350,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardHeader
                  title={membership.type}
                  titleTypographyProps={{
                    align: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  sx={{
                    backgroundColor: "#f44336",
                    color: "#fff",
                    padding: "16px",
                    borderRadius: "8px 8px 0 0",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                  <Typography variant="h5" align="center" gutterBottom>
                    {membership.price}
                  </Typography>
                  <ul>
                    {membership.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <Typography variant="body2">{benefit}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                      marginTop: "auto",
                      padding: "10px",
                      backgroundColor: "#d32f2f",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "#9a2b2b",
                      },
                    }}
                    onClick={() => handleCardSelection(membership.idMembership)}
                    disabled={loading} 
                  >
                    {loading ? "Enviando..." : "Elegir"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Membership;


  



