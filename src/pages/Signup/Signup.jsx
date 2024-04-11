import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { signup } from '../../services/authService'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [nickName, setNickName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [age, setAge] = useState(null)
    const [country, setCountry] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const handleSignup = async () => {
      try {
        const response = await signup({ name: name, lastName: lastName, nickName: nickName, email: email, password: password, age: age, country: country })
        localStorage.setItem('token', response.token)
        navigate('/')
      } catch (error) {
        setErrorMessage('No se ha podido completar el registro, asegúrate de que has cumplimentados todos los campos obligatorios *')
      }
    }

    return (
      <div className='main'>
        <Card className='anim' sx={{ maxWidth: '500px' }}>
          <CardHeader title='Registro' />
          <CardContent>
          <TextField
              required
              onChange={(e) => setName(e.target.value)}
              label='Nombre'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              label='Apellido'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
            required
              onChange={(e) => setNickName(e.target.value)}
              label='Nombre de usuario'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
            required
              onChange={(e) => setEmail(e.target.value)}
              label='E-mail'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
            required
             onChange={(e) => setPassword(e.target.value)}
              type='password'
              label='Contraseña'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
            required
              onChange={(e) => setAge(e.target.value)}
              label='Edad'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              onChange={(e) => setCountry(e.target.value)}
              label='Provincia'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            {errorMessage && (
              <Typography color='error' textAlign='center' mt={2}>
                {errorMessage}
              </Typography>
            )}
          </CardContent>
          <Divider />
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to='/auth/login' unstable_viewTransition><Button>Iniciar sesión</Button></Link>
            <Button variant='contained' onClick={() => {handleSignup()}}>
              Registrar
            </Button>
          </CardActions>
        </Card>
      </div>
        
      )
}

export default Signup