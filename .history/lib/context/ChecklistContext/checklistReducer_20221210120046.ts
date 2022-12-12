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
        const newChecklist = checklistData.map((checklist) => {
          const { checklistItems } = checklist;
          if (checklist.title === title) {
            return [
              ...checklistItems,
              { title: title, description: description, isChecked: false },
            ];
          } else {
            return checklist;
          }
        });
        return newChecklist;
      };
      return addChecklistItem();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
