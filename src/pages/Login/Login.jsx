import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import { login } from '../../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import logodarkImg from '../../assets/logo/logodark.png'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      const response = await login({ email, password })
      localStorage.setItem('token', response.token)
      navigate('/')
    } catch (error) {
      setErrorMessage('¡Parece que no hemos podido iniciar sesión! Comprueba que tu e-mail y contraseña son correctos e inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='main'>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <Box className='main-logo' >
          <img src={logodarkImg} alt="haveamin?"/>
          <Typography variant='h3'>haveamin?</Typography>
        </Box>
        <Card className='anim' sx={{ maxWidth: '500px', borderRadius: '16px' }}>
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
            <Link to='/auth/signup' unstable_viewTransition ><Button className='buttons'>Registrarse</Button></Link>
            <LoadingButton loading={isLoading} className='buttons' variant='contained' onClick={() => { handleLogin() }}>
              Iniciar sesión
            </LoadingButton>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default Login