import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://sosvet.vercel.app' : 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const veteGet = async () => {
  const response = await axiosInstance.get('/sos/veterinaires');
  console.log(response.data, '<<--')
  return response.data;

}

veteGet()

// Interceptor para añadir el token a las solicitudes si existe
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Interceptor de respuesta:', response);
    return response;
  },
  (error) => {
    console.error('Error en el interceptor:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

