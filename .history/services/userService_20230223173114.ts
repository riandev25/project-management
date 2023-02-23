import { endpoints } from './endpoints';

interface ICreateBoard {
  boardName: string;
}

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

  const createBoard = async ({ boardName }: ICreateBoard): Promise<void> => {
    try {
      const response = await apiClient.post('', { boardName });
      return response.data;
    } catch (err) {
      return;
    }
  };

  return { getBoard, createBoard };
};

export default userService;
