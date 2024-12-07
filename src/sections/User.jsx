import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Button,
  Divider,
  Paper,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Chart from "react-apexcharts";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"; 


const UserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.cultured.main,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

const UserStats = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.cultured.main,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

const UserActions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.cultured.main,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

const ProgressBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.cultured.main,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

const chartOptions = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["Progreso"],
};

const chartSeries = [75];

function User() {
  const { User } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 4, backgroundColor: "common.black" }}>
      <Box sx={{ justifyContent: "center", mt: 8 }}>
        <Typography variant="h4" gutterBottom color="redRYB.main">
          Perfil del Usuario
        </Typography>
        <UserInfo>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              marginRight: 2,
              bgcolor: "redRYB.main",
            }}
          >
            {User.username.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" color="redRYB.main">
              {User.username}
            </Typography>
            <Typography color="text.secondary">{User.email}</Typography>
          </Box>
        </UserInfo>
        <UserStats>
          <Box textAlign="center">
            <Typography variant="h6" color="text.primary">
              Entrenamientos
            </Typography>
            <Typography variant="h4" color="text.primary">
              24
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box textAlign="center">
            <Typography variant="h6" color="text.primary">
              Horas
            </Typography>
            <Typography variant="h4" color="text.primary">
              120
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box textAlign="center">
            <Typography variant="h6" color="text.primary">
              Progreso
            </Typography>
            <Typography variant="h4" color="text.primary">
              75%
            </Typography>
          </Box>
        </UserStats>
        <ProgressBox>
          <Typography variant="h6" gutterBottom color="text.primary">
            Progreso General
          </Typography>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="radialBar"
            height={357}
          />
        </ProgressBox>
        <UserActions>
          <Button
            variant="contained"
            color="redRYB"
            startIcon={<FitnessCenterIcon />}
            onClick={() => navigate('/routines')} 
          >
            Mis Entrenamientos
          </Button>
          <Button variant="contained" color="jet" startIcon={<SettingsIcon />}
            onClick={() => navigate('/Visualizar')} >
            Configuración
          </Button>
          <Button variant="contained" color="redRYB" startIcon={<LogoutIcon />}>
            Cerrar Sesión
          </Button>
        </UserActions>
      </Box>
    </Box>
  );
}

export default User;
