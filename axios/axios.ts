import axios, { AxiosInstance } from 'axios';
import { error } from "console";
import { headers } from "next/headers";
import { config } from "process";

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor for adding token to headers (SUCCESS)
api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => Promise.reject(error)
);

// Response interceptor for error handling

api.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        if (error.response?.status === 401) {
            console.error("Unauthorized, redirecting to login...");
            // Optionally redirect to login or refresh token
        }
        return Promise.reject(error);
    }
);

export default api;
