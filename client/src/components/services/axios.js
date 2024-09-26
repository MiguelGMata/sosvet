import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
  
// Interceptor para añadir el token a las solicitudes si existe
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;

