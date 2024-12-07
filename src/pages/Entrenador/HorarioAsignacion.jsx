import React, { useState, useRef, useEffect } from "react";
import Calendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Card,
  Button,
  Typography,
  Box,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add, Close } from "@mui/icons-material";
import Logo from "../../assets/images/Logo1.png";
import { motion } from "framer-motion";
import { varRotate } from "../../components/animate/variants/rotate";
import SelectUser from "../../components/Select/SelelectUser";
import SelectRutina from "../../components/Select/SelectRutina";
import { AsignarRutina } from "../../api/Ejericios";
import { useAuth } from "../../context/authContext";
import { useSnackbar } from "notistack";
import { TraerRutinadeeEntrenador } from "../../api/Ejericios";

const HorarioAsignacion = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { additionalData } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [newEvent, setNewEvent] = useState({
    start: "",
    recurrenceDay: "",
    userId: "",
    rutinaId: "",
  });

  console.log(additionalData);

  const handleDateSelect = (selectInfo) => {
    setNewEvent({
      start: selectInfo.startStr,
      recurrenceDay: "",
      userId: additionalData.id,
      rutinaId: "",
    });
    setOpenForm(true);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setNewEvent({
      start: clickInfo.event.startStr,
      recurrenceDay: clickInfo.event.extendedProps.recurrenceDay,
      userId: clickInfo.event.extendedProps.userId,
      rutinaId: clickInfo.event.extendedProps.rutinaId,
    });
    setOpenForm(true);
  };

  const handleEventAdd = async () => {
    // Enviar la información del evento al backend
    try {
      console.log("Evento a agregar:", newEvent);
      const dataPerson = {
        scheduledDate: newEvent.start,
        email: newEvent.userId,
        routineId: newEvent.rutinaId,
        recurrenceDay: newEvent.recurrenceDay,
      };
      console.log("Data a enviar:", dataPerson);
      const response = await AsignarRutina(dataPerson);
      if (response.status !== 200) {
        throw new Error("Error al agregar el evento");
      }
      enqueueSnackbar("Evento agregado correctamente", { variant: "success" });
      console.log("Evento agregado:", response.data);

      // Recargar la página
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar("Error al agregar el evento", { variant: "error" });
    }
  };

  const handleEventChange = async () => {
    // Enviar la información del evento al backend
    try {
      const response = await AsignarRutina(newEvent);
      if (response.status !== 200) {
        throw new Error("Error al actualizar el evento");
      }
      enqueueSnackbar("Evento actualizado correctamente", {
        variant: "success",
      });
      console.log("Evento actualizado:", response.data);

      // Recargar la página
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar("Error al actualizar el evento", { variant: "error" });
    }
  };

  const handleEventRemove = () => {
    selectedEvent.remove();
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setOpenForm(false);
  };

  const handleUserChange = (value) => {
    setNewEvent({ ...newEvent, userId: value });
  };

  const handleRutinaChange = (value) => {
    setNewEvent({ ...newEvent, rutinaId: value });
  };

  const handleRecurrenceDayChange = (event) => {
    setNewEvent({ ...newEvent, recurrenceDay: event.target.value });
  };

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const response = await TraerRutinadeeEntrenador(additionalData.id);
        console.log("Response:", response);
        if (response.status !== 200) {
          throw new Error("Error al obtener las rutinas");
        }
        console.log("Rutinas:", response.data);

        // Mapa de colores para los clientes
        const colorMap = {};
        const colors = [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#FF33A1",
          "#FF8C33",
          "#33FFF5",
          "#8C33FF",
        ];
        let colorIndex = 0;

        // Transformar los datos recibidos en eventos para el calendario
        const rutinas = response.data.flatMap((rutina) =>
          rutina.clients.flatMap((client) => {
            if (!colorMap[client.user_id]) {
              colorMap[client.user_id] = colors[colorIndex % colors.length];
              colorIndex++;
            }
            return client.client_routines.recurrentDates.map((date) => ({
              id: rutina.id,
              title: rutina.name,
              start: date,
              userId: client.user_id,
              rutinaId: rutina.id,
              recurrenceDay: client.client_routines.recurrenceDay,
              backgroundColor: colorMap[client.user_id],
              borderColor: colorMap[client.user_id],
            }));
          })
        );

        // Actualizar el estado de los eventos
        setEvents(rutinas);
      } catch (error) {
        console.error("Error:", error);
        enqueueSnackbar("Error al obtener las rutinas", { variant: "error" });
      }
    };

    fetchRutinas();
  }, [additionalData.id, enqueueSnackbar]);

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
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenForm(true)}
            sx={{
              backgroundColor: "redRYB.main",
              "&:hover": {
                backgroundColor: "#b71c1c",
                transform: "scale(1.05)",
              },
              transition: "transform 0.3s",
            }}
          >
            Asignar Rutina
          </Button>
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
            selectable
            editable
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
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
            eventTextColor="#fff"
          />
        </Card>
      </Box>

      <Dialog
        open={openForm}
        onClose={() => setOpenForm(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            p: 2,
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          },
        }}
      >
        <DialogTitle>
          {selectedEvent ? "Editar Evento" : "Nuevo Evento"}
          <IconButton
            aria-label="close"
            onClick={() => setOpenForm(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            margin="dense"
            label="Fecha de Inicio"
            type="datetime-local"
            fullWidth
            value={newEvent.start}
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="recurrence-day-label">
              Día de Recurrencia
            </InputLabel>
            <Select
              labelId="recurrence-day-label"
              id="recurrence-day"
              value={newEvent.recurrenceDay}
              onChange={handleRecurrenceDayChange}
              label="Día de Recurrencia"
            >
              <MenuItem value="">
                <em>Seleccione un día</em>
              </MenuItem>
              <MenuItem value={0}>Domingo</MenuItem>
              <MenuItem value={1}>Lunes</MenuItem>
              <MenuItem value={2}>Martes</MenuItem>
              <MenuItem value={3}>Miércoles</MenuItem>
              <MenuItem value={4}>Jueves</MenuItem>
              <MenuItem value={5}>Viernes</MenuItem>
              <MenuItem value={6}>Sábado</MenuItem>
            </Select>
          </FormControl>
          <SelectUser onSelectionChange={handleUserChange} />
          <SelectRutina
            onSelectionChange={handleRutinaChange}
            personaId={additionalData.id}
          />
        </DialogContent>
        <DialogActions>
          {selectedEvent && (
            <Button
              onClick={handleEventRemove}
              color="error"
              variant="contained"
            >
              Eliminar
            </Button>
          )}
          <Button onClick={() => setOpenForm(false)} variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={selectedEvent ? handleEventChange : handleEventAdd}
            variant="contained"
            sx={{
              backgroundColor: "redRYB.main",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
          >
            {selectedEvent ? "Guardar Cambios" : "Agregar Evento"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HorarioAsignacion;
