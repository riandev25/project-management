import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const attachmentService = () => {
  const apiClient = endpoints('attachments', true);
  const apiGetClient = endpoints('');

  const createAttachment = async (file: File) => {
    try {
      const idCard = getLocalStorage('idCard');
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
      const idCard = getLocalStorage('idCard');
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
