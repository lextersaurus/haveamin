import { useEffect, useState } from "react"
import { getAllEvents } from "../../services/eventService"
import './AllEvents.css'
import EventCard from "../EventCard/EventCard"


const AllEvents = ({ searchQuery }) => {
  const [events, setEvents] = useState([])

  const handleUserEvents= async () => {
      const response = await getAllEvents()
      setEvents(response)
  }

  useEffect(() => {
      handleUserEvents()
  }, [])

  // Filtrar eventos basados en el término de búsqueda
  
  
  const filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );console.log(searchQuery)

  return (
      <div>
          <h3>Todos los eventos</h3>
          <ul className="eventList">
              {filteredEvents.map(event => (<EventCard key={event.id} event={event}/>))}
          </ul>
      </div>
  )
}

export default AllEvents