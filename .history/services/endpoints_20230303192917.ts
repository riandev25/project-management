import axios, { AxiosInstance } from 'axios';

export const endpoints = (path: string, file?: boolean) => {
  const node_env = process.env.NODE_ENV;

  let jwtToken: string = '';

  if (typeof window !== 'undefined') {
    const stringifiedApiKey = String(localStorage.getItem('jwtToken'));
    jwtToken = JSON.parse(stringifiedApiKey);
  }

  const apiClient: AxiosInstance = axios.create({
    baseURL:
      node_env === 'production'
        ? `https://taskaccio.onrender.com/${path}`
        : `http://localhost:3001/api/${path}`,
    headers: {
      'Content-type': file ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
    withCredentials: true,
  });

  return apiClient;
};
