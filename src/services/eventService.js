import { api } from "./config"

export const getCategoryEvent = async () =>{
    const { data } = await api.get('category/showall',{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })/* 
    console.log(data) */
    return data
 }

 export const getAllEvents = async () =>{
    const { data } = await api.get('event/showall',{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })/* 
    console.log(data) */
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