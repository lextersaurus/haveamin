import { Card, CardContent, Avatar, Typography, Box, Grid} from '@mui/material';
import { Person, Star, StarBorder, StarHalf } from '@mui/icons-material';
import PropTypes from 'prop-types'
import { getUserEvent } from '../../services/userService';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import { Divider } from "@mui/material"


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
      <Grid item xs={12} md={3}></Grid>
     <CardContent sx={{ display: 'flex', justifyContent:'space-around', alignItems: 'center',}}>
        
        <Box sx={{width:700}}>
        <Avatar
          src="src/assets/img/images.jpg"
          sx={{ width: 200, height: 200, marginRight: '20px',  }}
        >
          <Person fontSize="large" />
        </Avatar>
        <Typography>
            <h2>{user.nickName}</h2>
          </Typography>
          <Star />
          <Star />
          <Star />
          <StarHalf />
          <StarBorder />
        </Box>
       
        <Box>
        <h3>Datos personales: </h3>
          <Typography >
            <b>Nombre: </b>{user.name}
          </Typography>
          <Typography>
            <b>Apellido: </b>{user.lastName}
          </Typography>
          <Typography>
            <b>Edad: </b>{user.age}
          </Typography>
          <Typography>
            <b>Pais: </b>{user.country}
          </Typography>
        </Box>

        <Box>
        <h3>Sobre mí</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Box>
        
      </CardContent>
  <Divider variant="middle"/>

      <CardContent >
  
  <div style={{ marginRight: '20px' }}>
    <h3>Mis eventos</h3>
    {events.map(event => (
      <EventCard key={event.id} event={event}/>
    ))}
  </div>

</CardContent>

     
    </Card>
  )
}

UserCard.prototype = {
 user: PropTypes.object,
}

export default UserCard;
