import axios, { AxiosInstance } from 'axios';

export const endpoints = (path: string, file?: boolean) => {
  // if (typeof window !== 'undefined') {
  const { NODE_ENV } = process.env;

  let apiKey: string = '';

  if (typeof window !== 'undefined') {
    const stringifiedApiKey = String(localStorage.getItem('apiKey'));
    apiKey = JSON.parse(stringifiedApiKey);
  }

  const apiClient: AxiosInstance = axios.create({
    baseURL:
      NODE_ENV === 'production'
        ? `https://taskaccio.onrender.com/api/${path}`
        : `http://localhost:3001/api/${path}`,
    headers: {
      'Content-type': file ? 'multipart/form-data' : 'application/json',
      'x-api-key': apiKey,
    },
    withCredentials: true,
  });

  return apiClient;
};
// };
