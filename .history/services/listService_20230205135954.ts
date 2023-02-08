// import { ICreateCard } from '../interfaces/card';
// import { ICreateList } from '../interfaces/list.interface';
import { IBoardCardData, IBoardData } from '../interfaces/board.interface';
import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

interface ICreateList {
  listName: string;
}

export const listService = () => {
  const apiClient = endpoints('lists');
  const apiGetClient = endpoints('');

  const getLists = async () => {
    try {
      const stringifiedIdBoard = String(localStorage.getItem('idBoard'));
      const storedIdBoard = JSON.parse(stringifiedIdBoard);
      const response = await apiGetClient.get(`lists?idBoard=${storedIdBoard}`);
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

  const updateCard = async () => {
    try {
      const id = getLocalStorage('idList');
      const idCard = getLocalStorage('idCard');
      const response = await apiClient.patch(`${id}/cards/${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getLists, createList, updateList, updateCard };
};
