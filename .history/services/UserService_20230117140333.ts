import axios from 'axios';
import { IUser } from '../interfaces/user.interface';

const apiClient = axios.create({
  baseURL: 'https://taskaccio.onrender.com/api/auth',
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
    console.log(err);
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
