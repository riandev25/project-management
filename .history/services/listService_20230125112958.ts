// import { ICreateCard } from '../interfaces/card';
import { ICreateList } from '../interfaces/list.interface';
import { endpoints } from './endpoints';

export const listService = () => {
  const apiClient = endpoints('lists');

  const getLists = async () => {
    try {
      const response = await apiClient.get('');
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createList = async ({ listName }: ICreateList) => {
    try {
      const response = await apiClient.post('', { listName });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getLists, createList };
};
