import axios from 'axios'
import store from '../store'

// Create Instance
const fetch = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000
})

// Request interceptors
fetch.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['Authorization'] = getToken()
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

export default fetch