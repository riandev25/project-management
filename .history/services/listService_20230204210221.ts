// import { ICreateCard } from '../interfaces/card';
// import { ICreateList } from '../interfaces/list.interface';
import { IBoardCardData, IBoardData } from '../interfaces/board.interface';
import { getLocalStorage } from '../lib/utils/localStorage';
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

  const updateList = async (data: IBoardData | IBoardCardData) => {
    try {
      const id = getLocalStorage('idList');
      const response = await apiClient.patch(`${id}?addCard=true`, data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getLists, createList, updateList };
};
