import axios from 'axios';

export const apiFreelance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

apiFreelance.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
