import axios from "axios";

const BASE_URL = "https://facebook-backend-beige.vercel.app/api";
// const BASE_URL = 'http://localhost:4000/api';
const http = axios.create({
    baseURL: BASE_URL,
});

// http.interceptors.request.use((config) => { 
//     const { intercept = true } = config;
//     if (!intercept) return config;
//     const token = localStorage.getItem("gigastarToken");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });


export default http;