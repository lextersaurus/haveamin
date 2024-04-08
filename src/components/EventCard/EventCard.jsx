import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import EventIcon from '@mui/icons-material/Event'
import AccessibleIcon from '@mui/icons-material/Accessible'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import PropTypes from 'prop-types'
import './EventCard.css'
import { useEffect, useState } from 'react'
import { getUserEvent } from '../../services/userService'

const EventCard = ({event}) => {
    const [events, setEvents] = useState([])

    const handleUserEvents= async () => {
        const response = await getUserEvent()
        setEvents(response)
    }

    useEffect(() => {
        handleUserEvents()
    }, [])

    const isUserJoined = events.some((userEvent) => userEvent.id === event.id)

  return (
    <Card color='background.paper' className="eventListLi" sx={{ minWidth: 275, maxWidth: 500 }} >
        <CardContent>
            <h3>{event.name}</h3>
            <Typography></Typography>
            <p><PlaceIcon sx={{ fontSize: 'small'}}/> {event.place}</p>
            <p><EventIcon sx={{ fontSize: 'small'}}/> {event.date}</p>
            <p><b>Rango de edad: </b>{event.ageMin} - {event.ageMax}</p>
            <div className='event-icons'>
                <AccessibleIcon /> {event.isAccessible ? <CheckIcon /> : <CloseIcon/>}
                <Divider orientation='vertical' variant='soft' flexItem/>
                <EuroSymbolIcon /> {event.isFree ? <CloseIcon/> : <CheckIcon />}
            </div>
        </CardContent>
        <CardActions className='join-btn'>
            <Button color='secondary'>Ver detalles</Button>
            {isUserJoined ? <Button variant='outlined'>Salir</Button> : <Button variant='contained'>Unirse</Button>}
        </CardActions>
    </Card>
  )
}

EventCard.propTypes = {
    event: PropTypes.object,
}

export default EventCard