import { IChecklistArrays } from '../../interfaces/checklist';
import { checklistStore } from '../../store/checklistStore';

export const addChecklistState = (checklistData: IChecklistArrays[]) => {
  return checklistData.map(({ _id }) => ({
    ...{ _id },
    isAddCheckitem: false,
  }));
};
