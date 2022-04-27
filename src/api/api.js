import * as axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "5e9b0567-1d4c-4f0c-b3cd-9aba89e52c00" }
})


export const authAPI = {
    getAuth() {
        return axiosConfig.get("auth/me");
    }
}


export const userAPI = {
    getUsers(page, pageSize) {
        return axiosConfig.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return axiosConfig.post(`follow/${userId}`, {});
    },
    unfollowUser(userId) {
        return axiosConfig.delete(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosConfig.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return axiosConfig.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return axiosConfig.put(`/profile/status/`, { status: status })
            .then(response => response?.resultCode );
    }
}