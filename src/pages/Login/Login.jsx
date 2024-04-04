import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useState } from 'react'
import { login } from '../../services/authService'

const Login = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    /* const [errorMessage, setErrorMessage] = useState('') */

    const handleLogin = async () => {
        const response = await login({ email, password })
        console.log(response)
        localStorage.setItem('token', response.token)

    }

    return (
        <Card sx={{ maxWidth: '500px' }}>
          <CardHeader title='Login' />
          <CardContent>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label='Email'
              variant='outlined'
              fullWidth={true}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
             onChange={(e) => setPassword(e.target.value)}
              type='password'
              label='Password'
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
            <Button>Sign up</Button>
            <Button variant='contained' onClick={() => {handleLogin()}}>
              Login
            </Button>
          </CardActions>
        </Card>
      )
}

export default Login