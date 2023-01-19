import { useMutation } from '@tanstack/react-query';
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
    console.log(err);
  }
};

export const useLoginUser = async ({ email, password }: IUser) => {
  const response = await apiClient.post('/login', {
    email,
    password,
  });
  return useMutation(response.data);
};
