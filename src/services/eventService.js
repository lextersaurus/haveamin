import { api } from "./config"

export const getCategoryEvent = async () =>{
    const { data } = await api.get('/category/showall',{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    return data
}

export const getAllEvents = async () =>{
    const { data } = await api.get('/event/showall',{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    return data
}

export const getEventByCategory = async (categoryId) =>{
    const { data } = await api.get('/category/'+ categoryId +'/events',{
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}

 export const joinEvent = async (eventId) => {
    const { data } = await api.put(`/event/${eventId}/join`, {}, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}

export const quitEvent = async (eventId) => {
    const { data } = await api.delete(`/event/${eventId}/quit`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}

export const getOneEvent = async(eventId) =>{
    const{data} = await api.get('/event/show/'+ eventId, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}