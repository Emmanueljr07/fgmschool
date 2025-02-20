import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const CalendarView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="0px 20px 0px 20px">
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR */}
        <Box
          flex="1 1 160%"
          mb="20px"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <FullCalendar
            height="55vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev",
              center: "title",
              right: "next",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2024-06-23" },
              { id: "43210", title: "Timed event", date: "2024-05-14" },
            ]}
          />
        </Box>
      </Box>

      {/* {CALENDAR SIDEBAR} */}
      <Box
        flex="1 1 20%"
        backgroundColor={colors.primary[400]}
        p="15px"
        borderRadius="4px"
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CalendarView;
