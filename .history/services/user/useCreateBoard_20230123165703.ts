import { ICreateBoard } from '../../interfaces/user.interface';
import { endpoints } from '../endpoints';

export const createBoard = async ({ boardName }: ICreateBoard) => {
  const apiClient = endpoints('/auth');
  try {
    const response = await apiClient.post('', { boardName });
    return response.data;
  } catch (err) {
    return err;
  }
};
