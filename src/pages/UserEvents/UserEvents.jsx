import { useEffect, useState } from "react"
import { getUserEvent } from "../../services/userService"
import Loading from "../../components/Loading/Loading"
import './UserEvents.css'
import { Divider } from "@mui/material"
import EventCard from "../../components/EventCard/EventCard"


const UserEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleUserEvents= async () => {
        const response = await getUserEvent()
        setEvents(response)
        setIsLoading(false)
      }

    useEffect(() => {
        handleUserEvents()
    }, [])

  return (
    <div>
      <h2>Mis eventos</h2>
      <Divider variant="middle" />
      {
        isLoading ? 
        <Loading /> :
        <ul className="eventList">
            {events.map(event => (<EventCard key={event.id} event={event}/>))}
        </ul>
      }
    </div>
  )
}

export default UserEvents