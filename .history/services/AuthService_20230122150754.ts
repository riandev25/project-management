import axios from 'axios';
import { IUser } from '../interfaces/user.interface';

const { NODE_ENV } = process.env;

const apiClient = axios.create({
  baseURL:
    NODE_ENV === 'production'
      ? 'https://taskaccio.onrender.com/api/auth'
      : 'http://localhost:3001/api/auth',
  // baseURL: 'https://taskaccio.onrender.com/api/auth',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const registerUser = async ({ email, password }: IUser) => {
  try {
    const response = await apiClient.post('/register', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const loginUser = async ({ email, password }: IUser) => {
  try {
    const response = await apiClient.post('/login', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const logoutUser = async () => {
  try {
    const response = await apiClient.post('/logout');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
