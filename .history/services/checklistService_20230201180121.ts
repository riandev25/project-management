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
  const updateCheckitem = async (data: ICheckitemObject, id: string) => {
    try {
      const response = await apiClient.patch(`checkitems/${id}`, data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getChecklists, getCheckitems, createCheckitem, updateCheckitem };
};

export default checklistService;
