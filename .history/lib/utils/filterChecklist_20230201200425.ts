import { IChecklistStateObject } from "../../store/checklistStore";

export const filterChecklist = (
  checklistState: IChecklistStateObject[],
  _id: string,
  filtered: string
) => {
  const filteredCheckState = checklistState.find(
    (checklist) => checklist._id === _id
  );
  if (filtered === 'addCheckitem') return filteredCheckState?.isAddCheckitem;
  else return filteredCheckState?.isOptionOpen
};
