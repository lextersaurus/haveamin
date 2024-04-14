import dayjs from 'dayjs'
import 'dayjs/locale/es'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { createEvent, getCategoryEvent } from '../../services/eventService'

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
        category: '',
        description: ''
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

    const handleEventCreation = async () => {
        const response = await createEvent(eventData)
        navigate(`/evento/${response.id}`)
    }

    useEffect(() => {
        handleCategories()
    }, [])

    const navigate = useNavigate()

    return (
        <Box className='create-main'>
            <Card className='create-card' sx={{ borderRadius: '16px' }}>
                <CardHeader title='Nuevo evento' sx={{ textAlign: 'start' }} />
                <CardContent sx={{ display: 'flex', width: '100', padding: '16px', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
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
                            rows={8}
                            sx={{ marginBottom: '24px' }}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                        />
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <FormGroup sx={{ width: '20%', flexWrap: 'nowrap', flexDirection: 'row', gap: '24px' }}>
                                <FormControlLabel className='checkbox' control={<Checkbox />} label='Gratuito' onChange={(e) => { handleInputChange('isFree', e.target.checked) }} />
                                <FormControlLabel className='checkbox' control={<Checkbox />} label='Accesible' onChange={(e) => { handleInputChange('isAccessible', e.target.checked) }} />
                            </FormGroup>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '24px' }}>
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
                        <Box
                            sx={{ display: 'flex', gap: '24px', marginBottom: '24px' }}
                        >
                            <TextField
                            required
                            type='number'
                            label='Edad mínima'
                            variant='outlined'
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
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                            <DateTimePicker
                                required
                                label='Fecha y hora *'
                                timezone='UTC'
                                onChange={(e) => { handleInputChange('date', e.toISOString()) }}
                            />
                        </LocalizationProvider>
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button className='buttons' color='secondary' onClick={() => { navigate('/') }}>Cancelar</Button>
                    <Button className='buttons' variant='contained' onClick={() => { handleEventCreation() }}>Crear</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default CreateEvent
