import { useEffect, useState } from 'react'
import { getAllEvents } from '../../services/eventService'
import './AllEvents.css'
import EventCard from '../EventCard/EventCard'


const AllEvents = () => {
    const [events, setEvents] = useState([])

    const handleUserEvents= async () => {
          const response = await getAllEvents()
         setEvents(response)
      }

    useEffect(() => {
        handleUserEvents()
    }, [])

  return (
    <div>
      <h2>Todos los eventos</h2>
      <ul className='eventList'>
          {events.map(event => (<EventCard key={event.id} event={event}/>))}
      </ul>
    </div>
  )
}

export default AllEvents