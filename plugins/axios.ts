import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL as string | undefined;

  // Create a new Axios instance
  const axiosInstance = axios.create({
    baseURL,
  });

  // Request interceptors
  axiosInstance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    
    return config;
  });

  // Response interceptors for error handling
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
