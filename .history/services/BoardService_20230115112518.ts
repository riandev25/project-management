import axios from 'axios';
import { IBoard } from '../interfaces/board.interface';

const apiClient = axios.create({
  baseURL: 'https://taskaccio.onrender.com/api/boards',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const registerUser = async ({ boardName }: IBoard) => {
  try {
    const response = await apiClient.post('', {
      boardName,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
