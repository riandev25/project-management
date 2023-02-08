import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const attachmentService = () => {
  const apiGetClient = endpoints('');

  const createAttachment = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiGetClient.post(`image`, { idCard });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { createAttachment };
};
