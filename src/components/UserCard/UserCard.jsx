import { Card, CardContent, Avatar, Typography, TextField} from '@mui/material';
import { Person, Star, StarBorder, StarHalf } from '@mui/icons-material';
import PropTypes from 'prop-types'
import { getUserEvent } from '../../services/userService';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';


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
     <CardContent sx={{ display: 'flex',justifyContent:'space-around', alignItems: 'center',}}>
        <Avatar
          src="https://media.discordapp.net/attachments/1214875354154532914/1215273190528647178/IMG-20240307-WA0008.jpg?ex=6621105b&is=660e9b5b&hm=0618da7e3db8c7174f93af9327e8eae1257619ed0a1c54f34ba05408ee43533f&=&format=webp&width=480&height=612"
          sx={{ width: 200, height: 200, marginRight: '20px',  }}
        >
          <Person fontSize="large" />
        </Avatar>

        <div>
          <Typography>
            <h2><b>Nombre de usuario: </b>{user.nickName}</h2>
          </Typography>
          <Typography >
            <b>Nombre: </b>{user.name}
          </Typography>
          <Typography>
            <b>Apellido: </b>{user.lastName}
          </Typography>
          <Typography>
            <b>Edad: </b>{user.age}
          </Typography>
        </div>
        
      </CardContent>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
  
  <div style={{ marginRight: '20px' }}>
    <h3>Mis eventos</h3>
    {events.map(event => (
      <EventCard key={event.id} event={event}/>
    ))}
  </div>


  <div style={{ flex: 1 }}>
    
    <div>
      <h3>Nota de usuario</h3>
      <Star />
      <Star />
      <Star />
      <StarHalf />
      <StarBorder />
    </div>


    <div >
      <h3>Descripción</h3>
      <TextField
              id="outlined-multiline-flexible"
              label="Descripción"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />
    </div>

  </div>
</CardContent>

     
    </Card>
  )
}

UserCard.prototype = {
 user: PropTypes.object,
}

export default UserCard;
