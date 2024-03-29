import { ICheckitemObject } from '../interfaces/checklist';
import { ILabelOption } from '../interfaces/data';
import { ILabel } from '../interfaces/label.interface';
import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const checklistService = () => {
  const apiGetClient = endpoints('');
  const apiClient = endpoints('checklists');

  const getChecklists = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiGetClient.get(`checklists?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const getCheckitems = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiGetClient.get(
        `checklists/checkitems?idCard=${idCard}`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createCheckitem = async (data: ICheckitemObject) => {
    try {
      const response = await apiClient.post('checkitems', data);
      return response.data;
    } catch (err) {
      return err;
    }
  };
  const updateCheckitem = async (data: ICheckitemObject) => {
    try {
      const checkitemId = getLocalStorage('checkitemId');
      const response = await apiClient.patch(`checkitems/${checkitemId}`, data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteCheckitem = async (checkitemId: string) => {
    try {
      // const checkitemId = getLocalStorage('checkitemId');
      const response = await apiClient.delete(`checkitems/${checkitemId}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteCheckitems = async (id: string) => {
    try {
      // const checkitemId = getLocalStorage('checkitemId');
      const response = await apiClient.delete(`${id}/checkitems`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getChecklists, getCheckitems, createCheckitem, updateCheckitem, deleteCheckitem, deleteCheckitems };
};

export default checklistService;
