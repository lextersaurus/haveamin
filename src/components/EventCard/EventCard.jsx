import { Button, Card, CardActions, CardContent } from '@mui/material'
import {
    Place,
    Event,
    Accessible,
    Check,
    Close
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getUserEvent } from '../../services/userService'
import { joinEvent, quitEvent } from '../../services/eventService'

import './EventCard.css'

const EventCard = ({event}) => {
    const [events, setEvents] = useState([])
    const [userJoin, setUserJoin] = useState()

    const handleUserEvents= async () => {
        const response = await getUserEvent()
        setEvents(response)
    }

    const handleOnJoin = async (eventId) => {
        await joinEvent(eventId)
        setUserJoin(true)
    }

    const handleOnQuit = async (eventId) => {
        await quitEvent(eventId)
        setUserJoin(false)
    }

    useEffect(() => {
        handleUserEvents()
    }, [userJoin])
    
    const isUserJoined = events.some((userEvent) => userEvent.id === event.id)

  return (
    <Card color='background.paper' className="eventListLi" sx={{ minWidth: 275, maxWidth: 500 }} >
        <CardContent>
            <h3>{event.name}</h3>
            <p><Place sx={{ fontSize: 'medium'}}/> {event.place}</p>
            <p><Event sx={{ fontSize: 'medium'}}/> {event.date}</p>
            <p><b>Rango de edad: </b>{event.ageMin} - {event.ageMax}</p>
            {!event.isFree ? <p className='red'>Evento de pago</p> : <p className='green'>Evento gratuito</p>}
            <div><Accessible /> {event.isAccessible ? <Check color='success'/> : <Close color='error'/>}</div>
        </CardContent>
        <CardActions className='join-btn'>
            <Button color='secondary'>Ver detalles</Button>
            {isUserJoined ?
            <Button variant='outlined' onClick={() => {handleOnQuit(event.id)}}>Salir</Button> :
            <Button variant='contained' onClick={() => {handleOnJoin(event.id)}}>Unirse</Button>}
        </CardActions>
    </Card>
  )
}

EventCard.propTypes = {
    event: PropTypes.object,
}

export default EventCard