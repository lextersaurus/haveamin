import { useState, useEffect } from "react"
import { getCategoryEvent } from "../../services/eventService"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './CategoryEventList.css'

import deportsImage from "../../assets/categories/deports.png"
import petsImg from "../../assets/categories/pets.jpg"
import foodImg from "../../assets/categories/food.jpg"
import danceImg from "../../assets/categories/dance.jpg"
import videogamesImg from "../../assets/categories/videogames.jpg"
import tableboardImg from "../../assets/categories/tableboard.jpg"
import tecnologyImg from "../../assets/categories/tecnology.jpg"
import travelsImg from "../../assets/categories/travels.jpg"
import artImg from "../../assets/categories/art.jpg"
import musicImg from "../../assets/categories/music.jpg"
import othersImg from "../../assets/categories/others.jpg"

const CategoryEvent = () => {
    const [categories, setCategories] = useState([])
    const [slidesToShow, setSlidesToShow] = useState('')
    const [slidesToScroll, setSlidesToScroll] = useState('')

    const handleCategory = async () => {
        const response = await getCategoryEvent()
        setCategories(response.map(category => ({
            ...category,
            image: getCategoryImage(category.id)
        })))
    }
    /* Cantidad de categorias segun el tamaño de la pantalla */
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setSlidesToShow(2)
            setSlidesToScroll(1)
        } else if (window.innerWidth < 992) {
            setSlidesToShow(3)
            setSlidesToScroll(2)
        } else if (window.innerWidth < 1200) {
            setSlidesToShow(7)
            setSlidesToScroll(3)
        }else  {
            setSlidesToShow(9)
            setSlidesToScroll(3)
        }
    }

    useEffect(() => {
        handleCategory()
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const getCategoryImage = (categoryId) => {
        switch (categoryId) {
            case 1:
                return deportsImage
            case 2:
                return petsImg
            case 3:
                return videogamesImg
            case 4:
                return tableboardImg
            case 5:
                return foodImg
            case 6:
                return danceImg
            case 7:
                return tecnologyImg
            case 8:
                return travelsImg
            case 9:
                return artImg
            case 10:
                return musicImg
            case 11:
                return othersImg
            default:
                return null 
        }
    }
    // Configuración del carrusel
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        arrows: true
    }

    return (
        <div className="category-slider">
            <Slider {...settings}>
                {categories.map(category => (
                    <Link className="categoryListLi" key={category.id} to={'/categoria/' + category.id} >
                        <div className="category-item">
                            <img src={category.image} 
                                style={{borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover',}} 
                            /> 
                            <div className="category-name">{category.name}</div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    )
}

export default CategoryEvent
