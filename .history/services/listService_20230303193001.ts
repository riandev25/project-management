// import { ICreateCard } from '../interfaces/card';
// import { ICreateList } from '../interfaces/list.interface';
import { IBoardCardData, IBoardData } from '../interfaces/board.interface';
import { getLocalStorage } from '../lib/utils/localStorage';
import { listIdStore } from '../store/cardStore';
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
      const idBoard = getLocalStorage('idBoard');
      const response = await apiClient.post('', { listName, idBoard });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const updateList = async (data: IBoardCardData | IBoardData) => {
    try {
      const { _id } = data;
      const response = await apiClient.patch(`${_id}?addCard=true`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteList = async (id: string) => {
    try {
      const response = await apiClient.delete(`${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteCard = async ({ idList: id, _id: idCard }: IBoardCardData) => {
    try {
      const response = await apiClient.patch(
        `${id}/cards/${idCard}?type=delete`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createCard = async ({ cardName, _id }: IBoardCardData) => {
    try {
      const response = await apiClient.patch(`${_id}?addCard=true`, {
        cardName,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const updateCard = async ({
    idList: id,
    _id: idCard,
    cardName,
  }: IBoardCardData) => {
    try {
      const response = await apiClient.patch(`${id}/cards/${idCard}`, {
        cardName,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return {
    getLists,
    createList,
    updateList,
    deleteList,
    createCard,
    deleteCard,
    updateCard,
  };
};
