import { getLocalStorage } from '../lib/utils/setLocalStorage';
import { endpoints } from './endpoints';

export const labelService = () => {
  const apiGetClient = endpoints('');
  const apiClient = endpoints('labels');

  const getLabels = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiClient.get(`lists?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };
};
