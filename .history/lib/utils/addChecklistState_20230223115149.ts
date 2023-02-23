import { IChecklistArrays } from '../../interfaces/checklist';
import { checklistStore } from '../../store/checklistStore';

interface IAddChecklistState {
  _id: string;
  isAddCheckitem: boolean;
}

export const addChecklistState = (
  checklistData: IChecklistArrays[]
): IAddChecklistState[] => {
  return checklistData.map(({ _id }) => ({
    ...{ _id },
    isAddCheckitem: false,
  }));
};
