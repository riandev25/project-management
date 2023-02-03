import { IChecklistArrays } from '../../interfaces/checklist';

export const addChecklistState = (checklistData: IChecklistArrays[]) => {
  return checklistData.map(({ _id }) => ({
    ...{ _id },
    isOption: false,
    isAddCheckitem: false,
  }));
};
