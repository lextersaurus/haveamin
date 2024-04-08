import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEventByCategory } from '../../services/eventService'

const EventCategory = () => {
    const [categoryEvent, setCategoryEvent] = useState([])
    const { categoryId } = useParams()

    const handleCategoryCocktail = async () => {
            const response = await getEventByCategory(categoryId)
            /*  console.log(response) */
            setCategoryEvent(response)
    
    
        }

    useEffect(() => {
        handleCategoryCocktail()
    }, [categoryId])

    return (
        <div>  
            <div className="mainCategory">
            <h1>hola</h1>
                {categoryEvent.map(event => (
                    <Link key={event.id} to={'category/' + event.id }>
                        <div >
                                <h3>{event.name}</h3>
                                
                            </div>
                    </Link> 
                 ))}
            </div>
        </div>
    )
}

export default EventCategory