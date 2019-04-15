import axios from 'axios'

const api  = axios.create({
    baseURL: 'https://app-dropbox-backend.herokuapp.com'
})

export default api;