import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f2c3c2f6-8493-49b7-b550-83cfb33ac815'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    getUserById(userId) {
    return instance.get(`profile/` + userId)
        .then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}