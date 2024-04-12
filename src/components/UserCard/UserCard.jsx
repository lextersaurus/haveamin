import { Card, CardContent, Avatar, Typography, Box, Grid, Rating, Stack, Divider, CardHeader} from '@mui/material';
import PropTypes from 'prop-types'
import { getCreatedEvents } from '../../services/userService';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import './UserCard.css'

const UserCard = ({user}) => {
    const [events, setEvents] = useState([])

    const handleCreatedEvents = async () => {
        const response = await getCreatedEvents(localStorage.id)
        setEvents(response)
      }

    useEffect(() => {
      handleCreatedEvents()
    }, [])

  return (
    <Card sx={{ height:'auto', margin: '15px', }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '24px'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar
              src="src/assets/img/usuarop.avif"
              sx={{ width: 200, height: 200, marginBottom: '20px', }}>
            </Avatar>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
            <Typography variant='h4' sx={{ textAlign: 'left', textWrap: 'balance'}}>
            {user.name} {user.lastName}
            </Typography>
            <Typography variant='h6'>
              {user.nickName}
            </Typography>
            <Typography>
              {user.age} años, {user.country}
            </Typography>
          </Box>
          </Box>
          <Stack spacing={1}>
              <Rating name="size-large" defaultValue={4} size="large" disabled />
          </Stack>
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

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard;

// <Grid container spacing={3}>

// <Grid item xs={12} md={4}>
//   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <Avatar
//         src="src/assets/img/usuarop.avif"
//         sx={{ width: 200, height: 200, marginBottom: '20px', }}>
//     </Avatar>
//     <Typography variant="h5" component="h2">
//       {user.nickName}
//     </Typography>
    
    // <Stack spacing={1}>
    //   <Rating name="size-large" defaultValue={4} size="large" disabled />
    // </Stack>
//   </Box>
// </Grid>

// <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
  // <Typography>
  //   <b>Nombre: </b>{user.name}
  // </Typography>
  // <Typography>
  //   <b>Apellido: </b>{user.lastName}
  // </Typography>
  // <Typography>
  //   <b>Edad: </b>{user.age}
  // </Typography>
  // <Typography>
  //   <b>Provincia: </b>{user.country}
  // </Typography>
// </Box>
// </Grid>

// </Grid>