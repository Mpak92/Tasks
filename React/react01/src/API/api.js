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
    }
}

export const profileAPI = {
    getUserById(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
        .then(response => response.data);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => response.data);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data);
    }
}