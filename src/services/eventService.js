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