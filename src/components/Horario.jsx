import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Paper, Typography, Box } from "@mui/material";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "CYCLINGTECH",
    start: new Date(2024, 8, 23, 6, 0), // Septiembre 23, 6:00 AM
    end: new Date(2024, 8, 23, 7, 15), // Septiembre 23, 7:15 AM
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
  // Agrega más eventos según tu necesidad
];

const CalendarPage = () => {
  return (
    <Box p={3}>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Horarios de Clases
        </Typography>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView="week"
          views={["week", "day"]}
        />
      </Paper>
    </Box>
  );
};

export default CalendarPage;
