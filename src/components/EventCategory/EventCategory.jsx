import { Box, Button, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventByCategory } from '../../services/eventService'
import { getCategory } from '../../services/categoryService'
import EventCard from '../EventCard/EventCard'
import Loading from '../Loading/Loading'
import CategoryEvent from '../CategoryEventList/CategoryEventList'

import './EventCategory.css'

const EventCategory = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [categoryEvents, setCategoryEvents] = useState([])
    const [category, setCategory] = useState({})

    const { categoryId } = useParams()
    const navigate = useNavigate()

    const handleCategoryEvents = async () => {
        const response = await getEventByCategory(categoryId)
        setCategoryEvents(response)
    }

    const handleCategory = async () => {
        const response = await getCategory(categoryId)
        setCategory(response)
        setIsLoading(false)
    }

    useEffect(() => {
        handleCategoryEvents()
        handleCategory()
    }, [categoryId])

    if (isLoading) return (<Loading />)

    return (
        <>
        <CategoryEvent />
        <Divider variant='middle' />
        <div className='category-content'>
            <Box className='category-header'>
            <h2>{category.name}</h2>
            </Box>
            {categoryEvents.length === 0 ? 
            <Box className='empty-category'>
                <Typography variant='h5' color='primary'>¡Vaya! Parece que no hay nada por aquí...</Typography>
                <Button className='buttons' variant='outlined' onClick={() => {navigate('/')}}>Ver todos los eventos</Button>
            </Box> :
            <ul className='eventList'>
                {categoryEvents.map(event => (<EventCard key={event.id} event={event}/>))}
            </ul>
            }
        </div>
        </>
    )
}

export default EventCategory