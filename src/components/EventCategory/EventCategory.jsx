import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEventByCategory } from '../../services/eventService'
import EventCard from '../EventCard/EventCard'

const EventCategory = () => {
    const [categoryEvent, setCategoryEvent] = useState([])
    const { categoryId } = useParams()

    const handleCategoryCocktail = async () => {
            const response = await getEventByCategory(categoryId)
            setCategoryEvent(response)
    
    
        }

    useEffect(() => {
        handleCategoryCocktail()
    }, [categoryId])

    return (
        <div>  
            <div className="categoryList">
                {categoryEvent.map(event => (
                    <EventCard key={event.id} event={event}/>
                 ))}
            </div>
        </div>
    )
}

export default EventCategory