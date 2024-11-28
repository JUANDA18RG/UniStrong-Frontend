import React, { useState, useRef } from "react";
import Calendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/images/Logo1.png";
import { motion } from "framer-motion";
import { varRotate } from "../../components/animate/variants/rotate";

const Horario = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);

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
            events={events}
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
            eventColor={theme.palette.redRYB.main}
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
