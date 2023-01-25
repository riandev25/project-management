import { endpoints } from './endpoints';

export const cardService = () => {
  const apiClient = endpoints('boards');

  const getCards = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };
};
