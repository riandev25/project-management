import { endpoints } from './endpoints';

interface ICreateBoard {
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

  const createBoard = async ({ boardName }: ICreateBoard) => {
    try {
      const response = await apiClient.post('', { boardName });
      return response.data;
    } catch (err) {
      throw new Error('Create board failed');
    }
  };

  return { getBoard, createBoard };
};
