import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import { signup } from '../../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import logodarkImg from '../../assets/logo/logodark.png'

const Signup = () => {
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [nickName, setNickName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [age, setAge] = useState(null)
    const [country, setCountry] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const navigate = useNavigate()

    const handleSignup = async () => {
      try {
        setIsLoading(true)
        const response = await signup({ name: name, lastName: lastName, nickName: nickName, email: email, password: password, age: age, country: country })
        localStorage.setItem('token', response.token)
        navigate('/')
      } catch (error) {
        setErrorMessage('No se ha podido completar el registro, asegúrate de que has cumplimentados todos los campos obligatorios *')
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
              type={ visible ? 'text' : 'password' }
              label='Contraseña'
              variant='outlined'
              fullWidth={true}
              margin='dense'
              InputProps={{
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
              <Link to='/auth/login' unstable_viewTransition ><Button className='buttons' >Iniciar sesión</Button></Link>
              <LoadingButton loading={isLoading} className='buttons' variant='contained' onClick={() => {handleSignup()}}>
                Registrar
              </LoadingButton>
            </CardActions>
          </Card>
        </Box>
      </div>
        
      )
}

export default Signup