import axios from 'axios';
import { IUser } from '../interfaces/user.interface';

const apiClient = axios.create({
  baseURL: 'https://api-taskaccio.onrender.com/api/auth',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export const registerUser = async ({ email, password }: IUser) => {
  try {
    const response = await apiClient.post<any>('/register', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
