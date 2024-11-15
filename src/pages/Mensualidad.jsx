import React, { useState, useEffect } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Card, Typography, Box } from "@mui/material";
import dayjs from "dayjs";

const Mensualidad = () => {
  const [membershipInfo, setMembershipInfo] = useState({
    startDate: "2024-11-01",
    endDate: "2024-11-15",
  });

  useEffect(() => {
    // Aquí podrías cargar los datos reales de la membresía del usuario desde una API o base de datos.
  }, []);

  const getDaysRemaining = () => {
    const endDate = dayjs(membershipInfo.endDate).startOf('day'); // Considera solo la fecha sin la hora
    const today = dayjs().startOf('day'); // También consideramos el día actual sin hora
    const daysRemaining = endDate.diff(today, "day");

    // Si la membresía ya está vencida
    if (daysRemaining < 0) {
      return "Membresía vencida";
    }

    // Si el día de vencimiento es el día actual
    if (daysRemaining === 0) {
      return "Hoy vence tu mensualidad";
    }

    // Para días previos a la fecha de vencimiento, simplemente sumamos 1 para contar desde el primer día.
    return daysRemaining;
  };

  const getEvents = () => {
    const startDate = dayjs(membershipInfo.startDate);
    const endDate = dayjs(membershipInfo.endDate);
    const today = dayjs();

    // Crear eventos para todos los días de la membresía
    const daysInMembership = [];
    for (let date = startDate; date <= endDate; date = date.add(1, "day")) {
      daysInMembership.push({
        title: date.isBefore(today) ? "Pasado" : "Futuro",
        start: date.format("YYYY-MM-DD"),
        color: date.isBefore(today) ? "#ffcccc" : "#ccffcc", // Rojo para pasado, verde para futuro
      });
    }
    return daysInMembership;
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Mensualidad
      </Typography>
      
      <Card sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Información de la Membresía</Typography>
        <Typography>Fecha de inicio: {membershipInfo.startDate}</Typography>
        <Typography>Fecha de fin: {membershipInfo.endDate}</Typography>
        <Typography>
          Días restantes: {getDaysRemaining()}
        </Typography>
      </Card>

      <Card sx={{ p: 2 }}>
        <Calendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={getEvents()}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "",
          }}
          height="auto"
        />
      </Card>
    </Box>
  );
};

export default Mensualidad;
