import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react'
import { getCategoryEvent } from '../../services/eventService'
import 'dayjs/locale/es'
import dayjs from 'dayjs'

import './CreateEvent.css'

const CreateEvent = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [ageMin, setAgeMin] = useState(0)
    const [ageMax, setAgeMax] = useState(0)
    const [isAccessible, setIsAccessible] = useState(false)
    const [isFree, setIsFree] = useState(false)
    const [newCategory, setNewCategory] = useState('')

    const handleCategory = async () => {
        const response = await getCategoryEvent()
       setCategories(response)
    }

    const handleNewCategory = async (e) => {
        setNewCategory(e.target.value)
    }

    const handleEventCreation = () => {
        const response = {name, place, date, ageMin, ageMax, isAccessible, isFree, newCategory}
        console.log(response)
    }

    useEffect(() => {
        handleCategory()
    }, [])

    const navigate = useNavigate()

    return (
        <Box className='create-main'>
            <Card className='create-card'>
                <CardHeader title='Nuevo evento' />
                <CardContent sx={{ display: 'flex', width: '100', padding: '16px', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%'}}>
                        <TextField
                            required
                            label='Título del evento'
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label='Descripción (Opcional)'
                            multiline
                            rows={5}
                            sx={{ marginBottom: '24px' }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormGroup sx={{ width: '20%'}}>
                                <FormControlLabel control={<Checkbox />} label='Gratuito'/>
                                <FormControlLabel control={<Checkbox />} label='Accesible'/>
                            </FormGroup>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '100%', marginLeft: '24px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            required label='Fecha *'
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </LocalizationProvider>                        
                                </Box>
                                <Box sx={{ width: '100%', marginLeft: '24px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimePicker required label='Hora *' onChange={(e) => setTime(e.target.value)}/>
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', marginLeft: '24px'}}>
                        <FormControl fullWidth >
                            <InputLabel required>Categoría</InputLabel>
                            <Select
                                required
                                value={newCategory}
                                label='Categoría'
                                onChange={handleNewCategory}
                                sx={{ marginBottom: '24px' }}
                            >
                                <MenuItem value={''}>--Selecciona una categoría--</MenuItem>
                                {categories.map((category) => (<MenuItem key={category.id} value={`${category.name}`}>{category.name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <TextField
                            required
                            label='Ubicación'
                            multiline
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => setPlace(e.target.value)}
                        />                            
                        <TextField
                            required
                            type='number'
                            label='Edad mínima'
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => setAgeMin(e.target.value)}
                        />
                        <TextField
                            required
                            type='number'
                            label='Edad máxima'
                            variant='outlined'
                            onChange={(e) => setAgeMax(e.target.value)}
                        />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button color='secondary' onClick={() => { navigate('/') }}>Cancelar</Button>
                    <Button variant='contained' onClick={() => { handleEventCreation() }}>Crear</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default CreateEvent