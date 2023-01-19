import axios, { AxiosResponse } from 'axios';
import { IBoard } from '../interfaces/board.interface';
import { useAuthStore } from '../store/authStore';

const UserService = (apiKey: string) => {
  const apiClient = axios.create({
    baseURL: 'https://taskaccio.onrender.com/api/boards',
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

  return { getBoard };
};

export default UserService;

// const { apiKey } = useAuthStore();
