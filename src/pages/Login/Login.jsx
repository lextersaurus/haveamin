import { Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { login } from '../../services/authService'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await login({ email, password })
      localStorage.setItem('token', response.token)
        localStorage.setItem('id', response.id)
        console.log(response)
      navigate('/')
    } catch (error) {
      setErrorMessage('¡Parece que no hemos podido iniciar sesión! Comprueba que tu e-mail y contraseña son correctos e inténtalo de nuevo.')
    }
  }

  return (
    <div className='main'>
      <Card className='anim' sx={{ maxWidth: '500px' }}>
        <CardHeader title='Inicio de sesión' />
        <CardContent>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label='E-mail'
            variant='outlined'
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
            margin='dense'
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
              )
          }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type={ visible ? 'text' : 'password' }
            label='Contraseña'
            variant='outlined'
            fullWidth={true}
            margin='dense'
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
              ),
              endAdornment: (
                  <InputAdornment position="end">
                      <IconButton 
                          onClick={ () => setVisible((value) => !value) }
                      >
                          { visible ? <VisibilityOutlined /> : <VisibilityOffOutlined /> }
                      </IconButton>
                  </InputAdornment>
              )
          }}
          />
          {errorMessage && (
            <Typography color='error' textAlign='center' mt={2}>
              {errorMessage}
            </Typography>
          )}
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to='/auth/signup' unstable_viewTransition><Button>Registrarse</Button></Link>
          <Button variant='contained' onClick={() => { handleLogin() }}>
            Iniciar sesión
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login