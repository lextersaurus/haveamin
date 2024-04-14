import { useEffect, useState } from 'react'
import { getAllEvents } from '../../services/eventService'
import './AllEvents.css'
import EventCard from '../EventCard/EventCard'
import Loading from '../Loading/Loading'


const AllEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleUserEvents= async () => {
          const response = await getAllEvents()
         setEvents(response)
         setIsLoading(false)
      }

    useEffect(() => {
        handleUserEvents()
    }, [])

  return (
    <div>
      <h2>Todos los eventos</h2>
      {
        isLoading ? 
        <Loading /> :
        <ul className='eventList'>
            {events.map(event => (<EventCard key={event.id} event={event}/>))}
        </ul>
      }
    </div>
  )
}

export default AllEvents