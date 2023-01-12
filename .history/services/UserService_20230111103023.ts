import axios from 'axios';
import { IUser } from '../interfaces/user.interface';

const apiClient = axios.create({
  baseURL: 'https://api-taskaccio.onrender.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export const registerUser = async ({ email, password }: IUser) => {
  const response = await apiClient.post<any>('/tutorials', { email, password });
  return response.data;
};
