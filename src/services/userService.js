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

 export const getUserProfile = async (userId) =>{
    const { data } = await api.get('/user/show/'+ userId,{
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}
