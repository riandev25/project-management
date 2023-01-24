import axios from 'axios';
import { shallow } from 'zustand/shallow';
import { useAuthLoginStore } from '../store/authStore';

export const useEndpoints = (path: string) => {
  if (typeof window !== 'undefined') {
    const { NODE_ENV } = process.env;

    const stringifiedApiKey = String(localStorage.getItem('apiKey'));
    const apiKey = JSON.parse(stringifiedApiKey);

    const apiClient = axios.create({
      baseURL:
        NODE_ENV === 'production'
          ? `https://taskaccio.onrender.com/api/${path}`
          : `http://localhost:3001/api/${path}`,
      headers: {
        'Content-type': 'application/json',
        'x-api-key': apiKey,
      },
      withCredentials: true,
    });

    return apiClient;
  }
};
