// import { ICreateCard } from '../interfaces/card';
// import { ICreateList } from '../interfaces/list.interface';
import { endpoints } from './endpoints';

interface ICreateList {
  listName: string;
}

export const listService = () => {
  const apiClient = endpoints('');

  const getLists = async () => {
    try {
      const stringifiedIdBoard = String(localStorage.getItem('idBoard'));
      const storedIdBoard = JSON.parse(stringifiedIdBoard);
      const response = await apiClient.get(`lists?idBoard=${storedIdBoard}`);
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
