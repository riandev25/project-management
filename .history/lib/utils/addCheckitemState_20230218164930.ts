import { ICheckitemObject } from '../../interfaces/checklist';

export const addCheckitemState = (checkitemData: ICheckitemObject[]) => {
  return checkitemData.map(({ _id }) => ({
    ...{ _id },
    isOptionOpen: false,
    isDateOptionOpen: false,
  }));
};
