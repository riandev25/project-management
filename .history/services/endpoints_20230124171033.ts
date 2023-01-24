import axios from 'axios';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useAuthLoginStore } from '../store/authStore';

export const useEndpoints = (path: string) => {
  const { NODE_ENV } = process.env;

  // const { apiKey } = useAuthLoginStore(
  //   (state) => ({
  //     apiKey: state.apiKey,
  //   }),
  //   shallow
  // );

  let apiKey;

  useEffect(() => {
    const stringifiedApiKey = String(localStorage.getItem('apiKey'));
    apiKey = JSON.parse(stringifiedApiKey);
  });

  if (apiKey) {
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
