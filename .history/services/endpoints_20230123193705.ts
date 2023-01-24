import axios from 'axios';
import { shallow } from 'zustand/shallow';
import { useAuthLoginStore } from '../store/authStore';

export const endpoints = (path: string) => {
  const { NODE_ENV } = process.env;

  const { apiKey } = useAuthLoginStore(
    (state) => ({
      apiKey: state.apiKey,
    }),
    shallow
  );

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
};
