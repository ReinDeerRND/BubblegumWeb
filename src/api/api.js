import * as axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "fe157158-08ae-43a5-a342-8666ee60a3d1" }
})

export const getUsers = (page, pageSize) => {
    return axiosConfig.get(`users?page=${page}&count=${pageSize}`)
        .then(response => response.data)
}

export const getProfile = (userId) => {
    return axiosConfig.get(`profile/${userId}`)
        .then(response => response.data);
}

export const followUser = (userId) => {
    return axiosConfig.post(`follow/${userId}`, {});
}

export const unfollowUser = (userId) => {
    return axiosConfig.delete(`follow/${userId}`);
}

export const getAuth = ()=>{
    return axiosConfig.get("auth/me");
}