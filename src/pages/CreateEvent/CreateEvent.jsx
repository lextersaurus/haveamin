import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/es'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createEvent, getCategoryEvent } from '../../services/eventService'
import { DateTimePicker } from '@mui/x-date-pickers';

import './CreateEvent.css'

dayjs.extend(utc)
dayjs.extend(timezone)

const CreateEvent = () => {
    const [categories, setCategories] = useState([])

    const [eventData, setEventData] = useState({
        name: '',
        place: '',
        date: '',
        ageMin: 0,
        ageMax: 0,
        isAccessible: false,
        isFree: false,
        category: ''
    })

    const handleCategories = async () => {
        const response = await getCategoryEvent()
        setCategories(response)
    }

    const handleInputChange = (propName, value) => {
        setEventData({
            ...eventData,
            [propName]: value,
        })
    }

    const handleEventCreation = () => {
        createEvent(eventData)
    }

    useEffect(() => {
        handleCategories()
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
                            label='Nombre del evento'
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                        <TextField
                            label='Descripción (Opcional)'
                            multiline
                            rows={5}
                            sx={{ marginBottom: '24px' }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormGroup sx={{ width: '20%'}}>
                                <FormControlLabel control={<Checkbox />} label='Gratuito' onChange={(e) => {handleInputChange('isFree', e.target.checked)}}/>
                                <FormControlLabel control={<Checkbox />} label='Accesible' onChange={(e) => {handleInputChange('isAccessible', e.target.checked)}}/>
                            </FormGroup>
                            <Box sx={{ display: 'flex' }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                                    <DateTimePicker
                                        required
                                        label='Fecha y hora *'
                                        timezone='UTC'
                                        onChange={(e) => {handleInputChange('date', e.toISOString())}}   
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', marginLeft: '24px'}}>
                        <FormControl fullWidth >
                            <InputLabel required>Categoría</InputLabel>
                            <Select
                                required
                                value={eventData.category}
                                label='Categoría'
                                onChange={(e) => handleInputChange('category', e.target.value)}
                                sx={{ marginBottom: '24px' }}
                            >
                                <MenuItem value={''}>--Selecciona una categoría--</MenuItem>
                                {categories.map((category) => (<MenuItem key={category.id} value={`${category.id}`}>{category.name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <TextField
                            required
                            label='Ubicación'
                            multiline
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => handleInputChange('place', e.target.value)}
                        />                            
                        <TextField
                            required
                            type='number'
                            label='Edad mínima'
                            variant='outlined'
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => handleInputChange('ageMin', e.target.value)}
                        />
                        <TextField
                            required
                            type='number'
                            label='Edad máxima'
                            variant='outlined'
                            onChange={(e) => handleInputChange('ageMax', e.target.value)}
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