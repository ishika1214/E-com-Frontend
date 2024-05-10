import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_BASE_URL,
 
});

console.log(process.env.REACT_APP_BACKEND_SERVER_BASE_URL);


// Add a request interceptor to include the bearer token in headers
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
