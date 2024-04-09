import { useEffect, useState } from "react"
import { getAllEvents } from "../../services/eventService"
import './AllEvents.css'
import EventCard from "../EventCard/EventCard"


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
      <h3>Todos los eventos</h3>
      <ul className="eventList">
          {events.map(event => (<EventCard key={event.id} event={event}/>))}
      </ul>
    </div>
  )
}

export default AllEvents