import axios from 'axios'

// Create Instance
const fetch = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000
})

// Request interceptors
fetch.interceptors.request.use(config => {
    // if (store.getters.token) {
        // config.headers['Authorization'] = 
    // }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

export default fetch