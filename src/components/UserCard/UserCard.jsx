import { Card, CardContent, Avatar, Typography, Box, Grid, Rating, Stack, Divider} from '@mui/material';
import PropTypes from 'prop-types'
import { getUserEvent } from '../../services/userService';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import './UserCard.css'

const UserCard = ({user}) => {
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
    
    <Card sx={{ height:'auto', margin: '15px', }}>
        <CardContent>
          <Grid container spacing={3}>

            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                    src="src/assets/img/usuarop.avif"
                    sx={{ width: 200, height: 200, marginBottom: '20px', }}>
                </Avatar>
                <Typography variant="h5" component="h2">
                  {user.nickName}
                </Typography>
                
                <Stack spacing={1}>
                  <Rating name="size-large" defaultValue={4} size="large" />
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <Typography>
                <b>Nombre: </b>{user.name}
              </Typography>
              <Typography>
                <b>Apellido: </b>{user.lastName}
              </Typography>
              <Typography>
                <b>Edad: </b>{user.age}
              </Typography>
              <Typography>
                <b>País: </b>{user.country}
              </Typography>
            </Box>
          </Grid>

            <Grid item tem xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <Typography variant="h6" component="h3">
                  Sobre mí: 
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                Entusiasta del tiempo libre compartido, disfruto organizando y participando en quedadas para eventos culturales, deportivos o sociales. ¡Siempre listo/a para explorar nuevas experiencias y conectar con gente afín!</Typography>
              </Box>
            </Grid>

          </Grid>
        </CardContent>

      <Divider variant="middle"/>

      <CardContent >
        <div>
          <h3>Eventos creados</h3>
          <ul className="list">
              {events.map(event => (<EventCard key={event.id} event={event}/>))}
          </ul>
        </div>
        </CardContent>
    </Card>
  )
}

UserCard.prototype = {
 user: PropTypes.object,
}

export default UserCard;
