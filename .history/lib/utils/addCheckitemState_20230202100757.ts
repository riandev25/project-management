import { ICheckitemObject } from '../../interfaces/checklist';

export const addCheckitemState = (checklistData: ICheckitemObject[]) => {
  return checklistData.map(({ _id }) => ({
    ...{ _id },
    isOptionOpen: false,
  }));
};
