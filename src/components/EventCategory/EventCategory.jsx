import { Box, Button, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventByCategory } from '../../services/eventService'
import { getCategory } from '../../services/categoryService'
import EventCard from '../EventCard/EventCard'
import CategoryEvent from '../CategoryEventList/CategoryEventList'

import './EventCategory.css'
import Loading from '../Loading/Loading'

const EventCategory = () => {
    const [categoryEvents, setCategoryEvents] = useState([])
    const [category, setCategory] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { categoryId } = useParams()
    const navigate = useNavigate()

    const handleCategoryEvents = async () => {
        const response = await getEventByCategory(categoryId)
        setCategoryEvents(response)
        setIsLoading(false)
    }

    const handleCategory = async () => {
        const response = await getCategory(categoryId)
        setCategory(response)
    }

    useEffect(() => {
        handleCategoryEvents()
        handleCategory()
    }, [categoryId])


    return (
        <>
        <CategoryEvent />
        <Divider variant='middle' />
        <div className='category-content'>
            <Box className='category-header'>
            <h2>{category.name}</h2>
            </Box>
            {
                isLoading ? 
                <Loading /> :
                (
                    categoryEvents.length === 0 ? 
                    <Box className='empty-category'>
                        <Typography variant='h5' color='primary'>¡Vaya! Parece que no hay nada por aquí...</Typography>
                        <Button className='buttons' variant='outlined' onClick={() => {navigate('/')}}>Ver todos los eventos</Button>
                    </Box> :
                    <ul className='eventList'>
                        {categoryEvents.map(event => (<EventCard key={event.id} event={event}/>))}
                    </ul>
                    
                )
            }
        </div>
        </>
    )
}

export default EventCategory