import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useState } from 'react'
import { login } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    /* const [errorMessage, setErrorMessage] = useState('') */

    const navigate = useNavigate()

    const handleLogin = async () => {
        const response = await login({ email, password })
        localStorage.setItem('token', response.token)
        navigate('/')
    }

    return (
      <div className='main'>
        <Card sx={{ maxWidth: '500px' }}>
          <CardHeader title='Inicio de sesión' />
          <CardContent>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label='E-mail'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
             onChange={(e) => setPassword(e.target.value)}
              type='password'
              label='Contraseña'
              variant='outlined'
              fullWidth={true}
            />
     {/*        errorMessage && (
              <Typography color='error' textAlign='center' mt={2}>
                {errorMessage}
              </Typography>
            ) */}
          </CardContent>
          <Divider />
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => { navigate('/auth/signup') }}>Registrarse</Button>
            <Button variant='contained' onClick={() => {handleLogin()}}>
              Iniciar sesión
            </Button>
          </CardActions>
        </Card>
      </div>
        
      )
}

export default Login