import { IChecklistStateObject } from '../../store/checklistStore';

export const filterChecklist = (
  checklistState: IChecklistStateObject[],
  _id: string
) => {
  const filteredCheckState = checklistState.find(
    (checklist) => checklist._id === _id
  );
  return filteredCheckState?.isAddCheckItem;
};
