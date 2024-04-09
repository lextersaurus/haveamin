import { api } from "./config"

export const getUserEvent = async () =>{
    const { data } = await api.get('user/events',{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })/* 
    console.log(data) */
    return data
 }