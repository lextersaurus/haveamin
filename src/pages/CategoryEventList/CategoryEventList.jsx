import { useState } from "react"
import { getCategoryEvent } from "../../services/eventService"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './CategoryEventList.css'



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
        <h2>Categorias de eventos</h2>
            <ul className="categoryList">
                {categories.map(category => (
                    <Link className="categoryListLi" key={category.id} to={'/category/' + category.id} >
                        <li>{category.name}</li>
                    </Link>
                ))}
            </ul>
    </div>
  )
}

export default CategoryEvent