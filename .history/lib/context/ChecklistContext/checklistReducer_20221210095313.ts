import {
  IChecklistArray,
  ChecklistAction,
} from '../../../interfaces/checklist';

const checklistReducer = (
  checklistData: IChecklistArray[],
  action: ChecklistAction
): IChecklistArray[] => {
  switch (action.type) {
    case 'ADD_CHECKLIST_ITEM':
      const addChecklistItem = () => {
        const { title, description } = action.payload;
        const newChecklistItems = checklistData.map((checklist) => {
          return checklist.title === title
            ? { ...checklist, description, isChecked: false }
            : checklist;
        });
        return newChecklistItems;
      };
      return addChecklistItem();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
