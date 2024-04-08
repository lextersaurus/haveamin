import { useEffect, useState } from "react"
import { getUserEvent } from "../../services/userService"

import './UserEvents.css'
import { Divider } from "@mui/material"


const UserEvents = () => {
    const [events, setEvents] = useState([])

    const handleUserEvents= async () => {
          const response = await getUserEvent()
         /*  console.log(response) */
         setEvents(response)
      }

    useEffect(() => {
        handleUserEvents()
    }, [])

  return (
    <div>
        <h2>Mis eventos</h2>
      <Divider variant="middle" />
        
            <ul className="userEvent">
                {events.map(event => (
                    <p className="userEventLi" key={event.id} >
                        <li><b>Evento: </b>{event.name}</li>
                        <li><b>Lugar: </b>{event.place}</li>
                        <li><b>Fecha: </b>{event.date}</li>
                        <li><b>Edad minima: </b>{event.ageMin}</li>
                        <li><b>Edad maxima: </b>{event.ageMax}</li>
                        <li><b>Accesibilidad: </b>{event.isAccessible}</li>
                        <li><b>Precio: </b>{event.isFree}</li>
                        
                    </p>
                ))}
            </ul>
    </div>
  )
}

export default UserEvents