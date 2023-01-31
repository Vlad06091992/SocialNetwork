import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY':"cbbe7914-4c94-4add-beb6-34a7a29cf3e9"
    }


});

export const UsersApi = {
    getUsers : (pageSize:number = 100,currentPage:number = 1) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },

    followUser : (id:number) => {
        return instance.post(`/follow/${id}`).then(response=>response.data)
    },

    unFollowUser : (id:number) => {
        return instance.delete(`/follow/${id}`).then(response=>response.data)
    },

    getUserProfile : (userId:number) =>{
        return instance.get(`profile/${userId}`).then(response=>response.data)

    }

}

