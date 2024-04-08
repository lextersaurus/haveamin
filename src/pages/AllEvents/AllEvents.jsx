import { useEffect, useState } from "react"
import { getAllEvents } from "../../services/eventService"
import { IconButton } from "@mui/material"
import './AllEvents.css'
import { AddCircle } from "@mui/icons-material"


const AllEvents = () => {
    const [events, setEvents] = useState([])

    const handleUserEvents= async () => {
          const response = await getAllEvents()
         /*  console.log(response) */
         setEvents(response)
      }

    useEffect(() => {
        handleUserEvents()
    }, [])

  return (
    <div>
        <h3>Eventos</h3>
            <ul className="eventList">
                {events.map(event => (
                    <div key={event.id}>
                         <p className="eventListLi"  >
                        <li><b>Evento: </b>{event.name}</li>
                        <li><b>Lugar: </b>{event.place}</li>
                        <li><b>Fecha: </b>{event.date}</li>
                        <li><b>Edad minima: </b>{event.ageMin}</li>
                        <li><b>Edad maxima: </b>{event.ageMax}</li>
                        <li><b>Accesibilidad: </b>{event.isAccessible}</li>
                        <li><b>Precio: </b>{event.isFree}</li>
                        <IconButton>
                        <AddCircle />
                    </IconButton>
                    </p>
                    </div>
                ))}
               
            </ul>
    </div>
  )
}

export default AllEvents