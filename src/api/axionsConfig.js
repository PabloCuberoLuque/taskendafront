// src/api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // URL de tu backend Spring Boot
});

export default api;