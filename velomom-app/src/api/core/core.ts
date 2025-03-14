import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-intern.bccdev.id/delvin/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message || "Terjadi kesalahan pada server.";
    console.error("API Error:", message);
    return Promise.reject(error);
  }
);


export default api;