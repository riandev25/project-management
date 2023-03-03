import axios from 'axios';
import { IUser } from '../interfaces/auth.interface';

// const { NODE_ENV } = process.env;

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taskaccio.onrender.com/api/auth'
      : 'http://localhost:3001/api/auth',
  // baseURL: 'https://taskaccio.onrender.com/api/auth',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const authService = () => {
  const registerUser = async ({ username, password }: IUser) => {
    console.log(username);
    try {
      const response = await apiClient.post('/register', {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const loginUser = async ({ username, password }: IUser) => {
    try {
      const response = await apiClient.post('/login', {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const logoutUser = async () => {
    try {
      const response = await apiClient.post('/logout');
      return response.data;
    } catch (err) {
      return err;
    }
  };
  return { loginUser, registerUser, logoutUser };
};
