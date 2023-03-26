import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "48b2fde2-591f-4e49-9e0f-38efaf8df484"
  }
})

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    )},
  follow (userId) {
    return (
      instance.post(`follow/${userId}`).then(response=>response.data)
    )
  },
  unfollow (userId) {
    return (
      instance.delete(`follow/${userId}`).then(response=>response.data)
    )
  },
  getProfile(userId) {
    console.warn('Obsolute method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return (
      instance.get(`profile/` + userId).then(response=>response.data)
    )
  },
  getStatus(userId) {
    return(
      instance.get(`profile/status/` + userId).then(response=>response.data)
    )
  },
  updateStatus(status) {
    return (
      instance.put(`profile/status`, {
        status: status
      })
    )
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {
      email, password, rememberMe
    })
  },
  logout() {
    return instance.delete(`auth/login`);
  },
}