import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneEvent } from '../../services/eventService'
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Box,
  Divider,
} from '@mui/material'
import { Place, Event, Accessible, Check, Close } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { joinEvent, quitEvent } from '../../services/eventService'
import { getUserData, getUserEvent } from '../../services/userService'
import './Event.css'

const EventPage = () => {
  const [event, setEvent] = useState({})
  const [userJoin, setUserJoin] = useState()
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { eventId } = useParams()

  const handleEvent = async () => {
    const response = await getOneEvent(eventId)
    setEvent(response)
    handleUser(response.userId)
  }

  const handleUser = async (userId) => {
    const response = await getUserData(userId)
    setUser(response)
  }

  const handleUserEvents = async () => {
    const response = await getUserEvent()
    setEvents(response)
    setIsLoading(false)
  }

  const handleOnJoin = async (eventId) => {
    setIsLoading(true)
    await joinEvent(eventId)
    setUserJoin(true)
  }

  const handleOnQuit = async (eventId) => {
    setIsLoading(true)
    await quitEvent(eventId)
    setUserJoin(false)
  }

  useEffect(() => {
    handleEvent()

    handleUserEvents()
  }, [userJoin])

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    const formattedDate = new Date(date)
    return formattedDate.toLocaleString('es-ES', options) + 'h'
  }
  const isUserJoined = events.some((userEvent) => userEvent.id === event.id)

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '16px',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          width: '80%',
          gap: '24px',
        }}
      >
        <div className='eventCard'></div>
        <Card sx={{ display: 'flex', width: '90%', justifyContent: 'center', borderRadius: '16px' }}>
          <CardHeader title={event.name} />
        </Card>
      </Box>

      <Card
        sx={{
          marginTop: '16px',
          maxWidth: '1000px',
          width: '80%',
          padding: '24px',
          height: 'fit-content',
          borderRadius: '16px'
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            textAlign: 'left',
            justifyContent: 'space-between',
            padding: '16px',
          }}
        >
          <Box>
            <div style={{ width: '500px' }}>
              <h2>Descripción del evento </h2>
              <Divider variant='middle' />

              <p style={{ textWrap: 'stable' }}>{event.description}</p>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.16890481163!2d-15.434672523712635!3d28.141345906214816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40953fa3967309%3A0x17cb7cd37b9d77f2!2sC.%20Luis%20Morote%2C%2035007%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1712841131930!5m2!1ses!2ses'
                width='500'
                height='300'
                loading='lazy'
                style={{ borderRadius: '16px'}}
              ></iframe>
            </div>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '50px',
              }}
            >
              <div className='photo'></div>
              <div>
                <h2 style={{ margin: '0' }}>
                  {user && user.data && user.data.nickName}
                </h2>
                <h4 style={{ margin: '0' }}>
                  {user && user.data && user.data.name}{' '}
                  {user && user.data && user.data.lastName}
                </h4>
              </div>
            </Box>

            <p>
              <Place sx={{ fontSize: 'medium' }} /> {event.place}
            </p>
            <p>
              <Event sx={{ fontSize: 'medium' }} /> {formatDate(event.date)}
            </p>
            <p>
              De {event.ageMin} a {event.ageMax} años
            </p>
            {!event.isFree ? (
              <p className='red'>Evento de pago</p>
            ) : (
              <p className='green'>Evento gratuito</p>
            )}
            <div>
              <Accessible />{' '}
              {event.isAccessible ? (
                <Check color='success' />
              ) : (
                <Close color='error' />
              )}
            </div>
          </Box>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          {isUserJoined ? (
            <LoadingButton
              className='buttons'
              loading={isLoading}
              variant='outlined'
              onClick={() => {
                handleOnQuit(event.id)
              }}
            >
              Salir
            </LoadingButton>
          ) : (
            <LoadingButton
              className='buttons'
              loading={isLoading}
              variant='contained'
              onClick={() => {
                handleOnJoin(event.id)
              }}
            >
              Unirse
            </LoadingButton>
          )}
        </CardActions>
      </Card>
    </Box>
  )
}

export default EventPage
