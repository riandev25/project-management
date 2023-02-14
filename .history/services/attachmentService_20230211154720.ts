import { getLocalStorage } from '../lib/utils/localStorage';
import { cardIdStore } from '../store/cardStore';
import { endpoints } from './endpoints';

export const attachmentService = () => {
  const apiClient = endpoints('attachments', true);
  const apiGetClient = endpoints('');

  const { idCard } = cardIdStore((state) => ({
    idCard: state.idCard,
  }));

  const createAttachment = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('idCard', String(idCard));
      formData.append('image', file);
      console.log(formData);
      const response = await apiClient.post('', formData);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const getAttachment = async () => {
    try {
      console.log(idCard);
      const response = await apiGetClient.get(`attachments?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const deleteAttachment = async (id: string) => {
    try {
      const response = await apiClient.delete(`${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { createAttachment, getAttachment, deleteAttachment };
};

export default attachmentService;
