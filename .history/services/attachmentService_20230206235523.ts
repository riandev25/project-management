import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const attachmentService = () => {
  const apiClient = endpoints('attachments');
  const apiGetClient = endpoints('');

  const createAttachment = async (file: File) => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiClient.post('', { idCard, file });
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

  return { createAttachment, getAttachment };
};

export default attachmentService;
