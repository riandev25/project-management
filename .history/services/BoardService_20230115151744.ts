import axios, { AxiosResponse } from 'axios';
import { IBoard } from '../interfaces/board.interface';
import { useAuthStore } from '../store/authStore';

export const useGetBoard = async () => {
  const { apiKey } = useAuthStore();

  const apiClient = axios.create({
    baseURL: 'https://taskaccio.onrender.com/api/boards',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': apiKey,
    },
    withCredentials: true,
  });

  try {
    const response = await apiClient.get('');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
