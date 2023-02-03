import { IChecklistStateObject } from '../../store/checklistStore';

export const filterChecklist = (
  checklistState: IChecklistStateObject[],
  _id: string
) => {
  return checklistState.find((checklist) => checklist._id === _id);
};
