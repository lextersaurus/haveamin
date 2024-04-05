import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useState } from 'react'
import { signup } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')

    const navigate = useNavigate()

    /* const [errorMessage, setErrorMessage] = useState('') */

    const handleSignup = async () => {
        const response = await signup({ name: name, lastName: lastName, nickName: nickName, email: email, password: password, age: age, country: country })
        localStorage.setItem('token', response.token)
        navigate('/')
    }

    return (
      <div className='main'>
        <Card sx={{ maxWidth: '500px' }}>
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
     {/*        errorMessage && (
              <Typography color='error' textAlign='center' mt={2}>
                {errorMessage}
              </Typography>
            ) */}
          </CardContent>
          <Divider />
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => { navigate('/auth/login') }}>Iniciar sesión</Button>
            <Button variant='contained' onClick={() => {handleSignup()}}>
              Registrar
            </Button>
          </CardActions>
        </Card>
      </div>
        
      )
}

export default Signup