import { Button, Card, CardActions, CardContent, Skeleton } from '@mui/material'
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
import { useNavigate } from "react-router-dom";

import './EventCard.css'

const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const formattedDate = new Date(date)
    return formattedDate.toLocaleString('es-ES', options)
}

const EventCard = ({event}) => {
    const [events, setEvents] = useState([])
    const [userJoin, setUserJoin] = useState()
    const navigate= useNavigate()

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
    <>
    {events.length !== 0 ?
    <Card color='background.paper' className="eventListLi" sx={{ display: 'flex', flexDirection: 'column', minWidth: 275, maxWidth: 500, borderRadius: '16px' }}>
        <CardContent>
            <h3>{event.name}</h3>
            <p><Place sx={{ fontSize: 'medium'}}/> {event.place}</p>
            <p><Event sx={{ fontSize: 'medium'}}/> {formatDate(event.date)}</p>
            <p>De {event.ageMin} a {event.ageMax} años</p>
            <div><Accessible /> {event.isAccessible ? <Check color='success'/> : <Close color='error'/>}</div>
        </CardContent>
        <CardActions className='join-btn' sx={{ marginTop: 'auto' }}>
            <Button color='secondary' onClick={()=>{navigate('/evento/'+event.id)}}>Ver detalles</Button>
            {isUserJoined ?
            <Button variant='outlined' onClick={() => {handleOnQuit(event.id)}}>Salir</Button> :
            <Button variant='contained' onClick={() => {handleOnJoin(event.id)}}>Unirse</Button>}
        </CardActions>
        {!event.isFree ? <p className='free-text red-field'>Evento de pago</p> : <p className='free-text green-field'>Evento gratuito</p>}
    </Card> :
    <Skeleton
        variant='rectangular'
        className='eventListLi'
        width={500}
        height={360}
        sx={{ borderRadius: '16px' }}
    />
    }    
    </>
  )
}

EventCard.propTypes = {
    event: PropTypes.object,
}

export default EventCard