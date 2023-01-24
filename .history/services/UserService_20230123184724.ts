import axios, { AxiosResponse } from 'axios';
import { shallow } from 'zustand/shallow';
import { IBoard } from '../interfaces/board.interface';
import { ICreateBoard } from '../interfaces/user.interface';
import { authStore } from '../store/authStore';
import { authLoginStore } from '../store/authStore';
import { endpoints } from './endpoints';

const userService = () => {
  const apiClient = endpoints('/auth');

  const getBoard = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createBoard = async ({ boardName }: ICreateBoard) => {
    try {
      const response = await apiClient.post('', { boardName });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getBoard, createBoard };
};

export default userService;
