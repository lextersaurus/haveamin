import { useEffect, useState } from "react"
import { getUserEvent } from "../../services/userService"

import './UserEvents.css'
import { Divider } from "@mui/material"
import EventCard from "../../components/EventCard/EventCard"


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
      <ul className="eventList">
          {events.map(event => (<EventCard key={event.id} event={event}/>))}
      </ul>
    </div>
  )
}

export default UserEvents