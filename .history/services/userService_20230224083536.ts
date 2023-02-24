import { IBoard } from '../interfaces/board';
import { endpoints } from './endpoints';

export interface ICreateNewBoard {
  boardName: string;
}

export const userService = () => {
  const apiClient = endpoints('boards');

  const getBoard = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createBoard = async ({
    boardName,
  }: {
    boardName: string;
  }): Promise<void> => {
    try {
      const response = await apiClient.post('', { boardName });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return { getBoard, createBoard };
};
