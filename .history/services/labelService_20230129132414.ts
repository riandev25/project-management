import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const labelService = () => {
  const apiGetClient = endpoints('');
  const apiClient = endpoints('labels');

  const getLabels = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiGetClient.get(`labels?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getLabels };
};

export default labelService;
