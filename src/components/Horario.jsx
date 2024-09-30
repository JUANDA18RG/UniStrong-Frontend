import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Paper,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../assets/images/Logo1.png";
import { motion } from "framer-motion";
import { varBounce } from "./animate/variants/bounce";
import { varFade } from "./animate/variants/fade";
import { varRotate } from "./animate/variants/rotate";

const localizer = momentLocalizer(moment);

// Estilos personalizados para los eventos
const StyledEvent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: "8px",
  padding: "4px 8px",
  boxShadow: theme.shadows[2],
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
  },
}));

const events = [
  {
    title: "CYCLINGTECH",
    start: new Date(2024, 8, 23, 6, 0),
    end: new Date(2024, 8, 23, 7, 15),
    instructor: "Elkin Nerbey",
    room: "Silva Romero",
  },
  {
    title: "CROSSTECH",
    start: new Date(2024, 8, 23, 7, 0),
    end: new Date(2024, 8, 23, 8, 15),
    instructor: "Elkin Nerbey",
    room: "Silva Romero",
  },
  {
    title: "YOGA",
    start: new Date(2024, 8, 23, 8, 30),
    end: new Date(2024, 8, 23, 9, 30),
    instructor: "Ana María",
    room: "Sala Zen",
  },
  {
    title: "PILATES",
    start: new Date(2024, 8, 23, 10, 0),
    end: new Date(2024, 8, 23, 11, 0),
    instructor: "Carlos Pérez",
    room: "Sala Zen",
  },
];

// Componente para mostrar detalles personalizados de eventos
const EventComponent = ({ event }) => {
  return (
    <StyledEvent>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        {event.title}
      </Typography>
      <Typography variant="caption">Instructor: {event.instructor}</Typography>
      <Typography variant="caption">Sala: {event.room}</Typography>
    </StyledEvent>
  );
};

const CalendarPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varFade().in}
    >
      <Box
        p={5}
        sx={{
          backgroundColor: "richBlack.main",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          {/* Contenedor de las cajas a la derecha */}
          <Grid item xs={12} md={4} lg={3}>
            <Grid
              container
              sx={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marhinY: "auto",
              }}
            >
              {/* Primera caja: Próximos Eventos */}
              <Grid item xs={12}>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={varBounce().in}
                >
                  <Paper
                    elevation={5}
                    sx={{
                      padding: { xs: "16px", sm: "24px" },
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      mb: { xs: 3, md: 0 },
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "redRYB.main" }}
                    >
                      Próximos Eventos
                    </Typography>
                    <List>
                      {events.map((event, index) => (
                        <React.Fragment key={index}>
                          <ListItem>
                            <ListItemText
                              primary={event.title}
                              secondary={`Instructor: ${event.instructor} | Sala: ${event.room}`}
                            />
                          </ListItem>
                          {index < events.length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Segunda caja: Noticias y Actualizaciones */}
              <Grid item xs={12}>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={varBounce().in}
                >
                  <Paper
                    elevation={5}
                    sx={{
                      padding: { xs: "16px", sm: "24px" },
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "redRYB.main" }}
                    >
                      Noticias y Actualizaciones
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Nuevo Programa de Entrenamiento"
                          secondary="¡Estamos emocionados de anunciar un nuevo programa de entrenamiento que comenzará el próximo mes!"
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText
                          primary="Cambio en el Horario de Clases"
                          secondary="Por favor, revisa el nuevo horario de clases que entrará en vigor a partir de la próxima semana."
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText
                          primary="Evento Especial de Yoga"
                          secondary="Únete a nosotros para un evento especial de yoga al aire libre el próximo sábado."
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          {/* Calendario en la parte principal */}
          <Grid item xs={12} md={8} lg={9}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={varBounce().in}
            >
              <Paper
                elevation={5}
                sx={{
                  padding: { xs: "16px", sm: "24px" },
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                }}
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={varRotate().in}
                >
                  <Box>
                    <img
                      src={Logo}
                      alt="Logo"
                      style={{
                        margin: "0 auto 20px auto",
                        padding: "5px",
                        border: "3px solid #ff0000",
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        display: "block",
                        boxShadow: "0 10px 0 10px #ffffff",
                      }}
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
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600, marginTop: "24px" }}
                  defaultView="week"
                  views={["week", "day"]}
                  components={{
                    event: EventComponent, // Personaliza la visualización de eventos
                  }}
                  eventPropGetter={(event) => ({
                    style: {
                      backgroundColor: "#FF2625",
                      borderRadius: "8px",
                      color: "#fff",
                      border: "none",
                      padding: "4px",
                    },
                  })}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default CalendarPage;
