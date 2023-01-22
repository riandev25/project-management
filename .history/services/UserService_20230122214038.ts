import axios, { AxiosResponse } from 'axios';
import { shallow } from 'zustand/shallow';
import { IBoard } from '../interfaces/board.interface';
import { useAuthStore } from '../store/authStore';
import { useAuthLoginStore } from '../store/authStore';

const { NODE_ENV } = process.env;

const UserService = () => {
  const { apiKey } = useAuthLoginStore(
    (state) => ({
      apiKey: state.apiKey,
    }),
    shallow
  );

  const apiClient = axios.create({
    baseURL:
      NODE_ENV === 'production'
        ? 'https://taskaccio.onrender.com/api/boards'
        : 'http://localhost:3001/api/boards',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': apiKey,
    },
    withCredentials: true,
  });

  const getBoard = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createBoard = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getBoard, createBoard };
};

export default UserService;

// const { apiKey } = useAuthStore();
