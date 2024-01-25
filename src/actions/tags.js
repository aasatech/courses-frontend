import { api } from "@/utils/api"


export const tags = async() =>{
    const response = await api.get('/tags?pages=1')
    return response.data
}