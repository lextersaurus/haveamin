import { api } from './config'

export const getUserEvent = async () => {
    const { data } = await api.get('user/events',{
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}

export const getCreatedEvents = async (userId) => {
    const { data } = await api.get(`event/created/${userId}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}

 export const getUserProfile = async () =>{
    const { data } = await api.get('/user/show', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}
