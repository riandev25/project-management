import { ILabelOption } from '../interfaces/data';
import { ILabel } from '../interfaces/label.interface';
import { getLocalStorage } from '../lib/utils/localStorage';
import { endpoints } from './endpoints';

export const labelService = () => {
  const apiGetClient = endpoints('');
  const apiClient = endpoints('labels');

  const labelOptionId = getLocalStorage('labelOptionId');

  const getLabels = async () => {
    try {
      const idCard = getLocalStorage('idCard');
      const response = await apiGetClient.get(`labels?idCard=${idCard}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const createLabel = async (data: ILabel) => {
    try {
      const response = await apiClient.post('', data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const updateLabel = async (data: ILabel) => {
    try {
      console.log(labelOptionId);
      const response = await apiClient.patch(`${labelOptionId}`, data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return { getLabels, createLabel, updateLabel };
};

export default labelService;
