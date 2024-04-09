import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneEvent } from "../../services/eventService";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Box
} from "@mui/material";
import { Place, Event, Accessible, Check, Close } from "@mui/icons-material";
import { joinEvent, quitEvent } from "../../services/eventService";
import { getUserEvent } from "../../services/userService";
/*import { Directions } from "@mui/icons-material";*/
import "./Event.css";

const EventPage = () => {
  const [event, setEvent] = useState({});
  const [userJoin, setUserJoin] = useState();
  const [events, setEvents] = useState([]);

  const { eventId } = useParams();

  const handleEvent = async () => {
    const response = await getOneEvent(eventId);
    setEvent(response);
  };

  useEffect(() => {
    handleEvent();
  }, []);

  const handleUserEvents = async () => {
    const response = await getUserEvent();
    setEvents(response);
  };

  const handleOnJoin = async (eventId) => {
    await joinEvent(eventId);
    setUserJoin(true);
  };

  const handleOnQuit = async (eventId) => {
    await quitEvent(eventId);
    setUserJoin(false);
  };

  useEffect(() => {
    handleUserEvents();
  }, [userJoin]);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = new Date(date);
    return formattedDate.toLocaleString("es-ES", options) + "h";
  };
  const isUserJoined = events.some((userEvent) => userEvent.id === event.id);

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Card className="eventCard"></Card>
        <Card sx={{width:'20%',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <CardHeader title={event.name} />
        </Card>
      </Box>

      <Card>
        <CardContent>
          <p>
            <Place sx={{ fontSize: "medium" }} /> {event.place}
          </p>
          <p>
            <Event sx={{ fontSize: "medium" }} /> {event.date}
          </p>
          <p>
            <b>Rango de edad: </b>
            {event.ageMin} - {event.ageMax}
          </p>
          {!event.isFree ? (
            <p className="red">Evento de pago</p>
          ) : (
            <p className="green">Evento gratuito</p>
          )}
          <div>
            <Accessible />{" "}
            {event.isAccessible ? (
              <Check color="success" />
            ) : (
              <Close color="error" />
            )}
          </div>
        </CardContent>
        <CardActions>
          {isUserJoined ? (
            <Button
              variant="outlined"
              onClick={() => {
                handleOnQuit(event.id);
              }}
            >
              Salir
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                handleOnJoin(event.id);
              }}
            >
              Unirse
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default EventPage;
