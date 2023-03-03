import { ICheckitemObject, IChecklistArrays } from '../interfaces/checklist';
import { getLocalStorage } from '../lib/utils/localStorage';
import { cardIdStore } from '../store/cardStore';
import { endpoints } from './endpoints';

interface ICreateChecklist {
  name: string;
  idCard: string;
}

interface IUpdateCheckitem {
  checkitemId: string;
  isChecked?: boolean;
  dueDate?: {
    remainingDays?: number;
    remainingHours?: number;
    remainingMinutes?: number;
    remainingSeconds?: number;
  };
  hasDueDate?: boolean;
  pickedDueDate?: Date;
}

export const checklistService = () => {
  const apiGetClient = endpoints('');
  const apiClient = endpoints('checklists');

  const { idCard } = cardIdStore((state) => ({
    idCard: state.idCard,
  }));

  const getChecklists = async () => {
    try {
      const response = await apiGetClient.get(`checklists?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createChecklist = async ({ name, idCard }: ICreateChecklist) => {
    try {
      const response = await apiClient.post('', { name, idCard });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteChecklist = async (id: string) => {
    try {
      const response = await apiClient.delete(`${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const getCheckitems = async () => {
    try {
      const response = await apiGetClient.get(
        `checklists/checkitems?idCard=${idCard}`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createCheckitem = async ({
    name,
    pos,
    isChecked,
    idCard,
    idChecklist,
  }: ICheckitemObject) => {
    try {
      const response = await apiClient.post(`${idChecklist}/checkitems`, {
        name,
        pos,
        isChecked,
        idCard,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };
  const updateCheckitem = async ({
    checkitemId,
    isChecked,
    dueDate,
    pickedDueDate,
    hasDueDate,
  }: IUpdateCheckitem) => {
    try {
      const response = await apiClient.patch(`checkitems/${checkitemId}`, {
        isChecked,
        dueDate,
        pickedDueDate,
        hasDueDate,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteDueDate = async ({
    checkitemId,
    hasDueDate,
  }: IUpdateCheckitem) => {
    try {
      const response = await apiClient.patch(`checkitems/${checkitemId}`, {
        hasDueDate,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteCheckitem = async (checkitemId: string) => {
    try {
      const response = await apiClient.delete(`checkitems/${checkitemId}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteCheckitems = async (id: string) => {
    try {
      const response = await apiClient.delete(`${id}/checkitems`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return {
    getChecklists,
    getCheckitems,
    createCheckitem,
    updateCheckitem,
    deleteCheckitem,
    deleteCheckitems,
    deleteChecklist,
    createChecklist,
    deleteDueDate,
  };
};

export default checklistService;
