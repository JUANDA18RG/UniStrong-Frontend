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

const HorarioAsignacion = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulación de carga de usuarios
    const fetchUsers = async () => {
      // Aquí se haría la llamada al endpoint para obtener los usuarios
      // const response = await fetch('/api/users');
      // const data = await response.json();
      // setUsers(data);

      // Simulación de datos de usuarios
      const simulatedUsers = [
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
      ];
      setUsers(simulatedUsers);
    };

    fetchUsers();
  }, []);

  const handleDateSelect = (selectInfo) => {
    setNewEvent({
      title: "",
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setOpenForm(true);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setNewEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
    });
    setOpenForm(true);
  };

  const handleEventAdd = () => {
    const calendarApi = calendarRef.current.getApi();
    const eventWithUser = { ...newEvent, userId: selectedUser };
    calendarApi.addEvent(eventWithUser);
    setEvents([...events, eventWithUser]);
    setOpenForm(false);
  };

  const handleEventChange = () => {
    selectedEvent.setProp("title", newEvent.title);
    selectedEvent.setStart(newEvent.start);
    selectedEvent.setEnd(newEvent.end);
    setOpenForm(false);
  };

  const handleEventRemove = () => {
    selectedEvent.remove();
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setOpenForm(false);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const filteredEvents = events.filter(
    (event) => event.userId === selectedUser
  );

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
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="user-select-label">Seleccionar Usuario</InputLabel>
            <Select
              labelId="user-select-label"
              value={selectedUser}
              onChange={handleUserChange}
              label="Seleccionar Usuario"
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            Nuevo Evento
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
            events={filteredEvents}
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
            eventColor={theme.palette.redRYB.main}
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
            label="Título"
            type="text"
            fullWidth
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            variant="outlined"
          />
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
          <TextField
            margin="dense"
            label="Fecha de Fin"
            type="datetime-local"
            fullWidth
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
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
