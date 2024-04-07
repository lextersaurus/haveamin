import { useState } from "react"
import { getCategoryEvent } from "../../services/eventService"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './CategoryEvent.css'



const CategoryEvent = () => {
    const [categories, setCategories] = useState([])

    const handleCategory = async () => {
          const response = await getCategoryEvent()
         /*  console.log(response) */
         setCategories(response)
      }

    useEffect(() => {
        handleCategory()
    }, [])

  return (
    <div>
        <h1 className="title">Categorias de eventos</h1>
            <ul>
                {categories.map(category => (
                    <Link className="categoryList" key={category.id} to={'/categories/' + category.name} >
                        <li>{category.name}</li>
                    </Link>
                ))}
            </ul>
    </div>
  )
}

export default CategoryEvent