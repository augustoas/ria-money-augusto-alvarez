import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

// Load API key from environment variables
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

// Check if the API key is provided
if (!apiKey) {
  throw new Error('API key is missing. Please set VITE_WEATHER_API_KEY.');
}

// Base URL for the API
const baseURL = 'https://api.openweathermap.org/data/2.5';

const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add a request interceptor to include the API key
  client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (config.params) {
      config.params = {
        ...config.params,
        appid: apiKey,
      };
    } else {
      config.params = { appid: apiKey };
    }
    return config;
  }, (error) => {
    // Log and handle request errors
    console.error('Request error:', error);
    return Promise.reject(error);
  });

  // Add a response interceptor to handle errors
  client.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    // Log and handle response errors
    console.error('Response error:', error);
    return Promise.reject(error);
  });

  return client;
};

export const apiClient = createApiClient(baseURL);
