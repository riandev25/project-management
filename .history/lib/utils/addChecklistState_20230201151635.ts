import { IChecklistArrays } from '../../interfaces/checklist';
import { checklistStore } from '../../store/checklistStore';

export const addChecklistState = (checklistData: IChecklistArrays[]) => {
  const { updateChecklistState } = checklistStore((state) => ({
    updateChecklistState: state.updateChecklistState,
  }));
  const filteredChecklist = checklistData.map(({ _id }) => ({
    ...{ _id },
    isOption: false,
    isAddCheckitem: false,
  }));
  updateChecklistState(filteredChecklist);
};
