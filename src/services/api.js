import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.88.11:8080/energy/api/mobile'
    //baseURL: 'https://ener-back-7dedbe1abde8.herokuapp.com/energy/api/mobile'
})

export default api;