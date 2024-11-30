import React, { useState, useRef, useEffect } from "react";
import Calendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/images/Logo1.png";
import { motion } from "framer-motion";
import { TraerRutinasUsuario } from "../../api/Ejericios";
import { varRotate } from "../../components/animate/variants/rotate";
import { useAuth } from "../../context/authContext";

const Horario = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const { additionalData } = useAuth();

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const id = additionalData.id;
        console.log("ID cliente:", id);
        const response = await TraerRutinasUsuario(id);
        if (response.status === 200) {
          const data = response.data;
          console.log("Datos recibidos:", data);

          // Procesar los eventos asegurando que las fechas sean objetos Date válidos
          const eventos = data.flatMap((rutina) =>
            rutina.recurrentDates.map((date) => ({
              title: rutina.name,
              start: new Date(date), // Convertir a objeto Date
            }))
          );
          console.log("Eventos procesados:", eventos);
          setEvents(eventos);
        } else {
          console.error("Error al obtener las rutinas");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRutinas();
  }, [additionalData.id]);

  useEffect(() => {
    console.log("Eventos actualizados:", events);
  }, [events]);

  return (
    <>
      <Box sx={{ p: 5, backgroundColor: "cultured.main" }}>
        <Box>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={varRotate().in}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{
                  padding: "10px",
                  border: "5px solid #ff0000",
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
          </motion.div>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "redRYB.main" }}
          >
            Tus Horarios de Entrenamientos
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Organiza tu entrenamiento con nuestras clases programadas
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 3 }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "richBlack.main" }}
            variant="h6"
          >
            Calendario de Eventos
          </Typography>
        </Stack>
        <Card
          sx={{
            p: 2,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            borderRadius: "16px",
          }}
        >
          <Calendar
            ref={calendarRef}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            initialDate="2025-01-01" // Mostrar enero 2025 como inicio
            events={events} // Usar eventos del estado
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            buttonText={{
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              list: "Lista",
            }}
            height="auto"
            eventBackgroundColor={theme.palette.redRYB.main}
            eventTextColor="#fff"
            selectable={false}
            editable={false}
          />
        </Card>
      </Box>
    </>
  );
};

export default Horario;
