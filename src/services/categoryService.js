import { api } from './config'

export const getCategory = async (categoryId) => {
    const { data } = await api.get(`/category/show/${categoryId}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    return data
}