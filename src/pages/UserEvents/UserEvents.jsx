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
                        <li>Evento: {event.name}</li>
                        <li>Lugar: {event.place}</li>
                        <li>Fecha: {event.date}</li>
                        <li>Edad minima: {event.ageMin}</li>
                        <li>Edad maxima: {event.ageMax}</li>
                        <li>Accesibilidad: {event.isAccessible}</li>
                        <li>Precio: {event.isFree}</li>
                    </p>
                ))}
            </ul>
    </div>
  )
}

export default UserEvents