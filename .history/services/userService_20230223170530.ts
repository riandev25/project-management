import { ICreateBoard } from '../interfaces/user.interface';
import { endpoints } from './endpoints';
import { IBoard } from '../interfaces/board';

const userService = () => {
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
      return err;
    }
  };

  return { getBoard, createBoard };
};

export default userService;
