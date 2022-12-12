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
          if (checklist.title === title) {
            const newChecklistItems = [
              ...checklist.checklistItems,
              { description, isChecked: false },
            ];
            return { ...checklist, checklistItems: newChecklistItems };
          } else {
            return checklist;
          }
        });
        return newChecklist;
      };
      return addChecklistItem();

    case 'TOGGLE_CHECKBOX':
      const toggleCheckbox = () => {
        const { title, id } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.title === title) {
            return {
              ...checklist,
              checklistItems: checklist.checklistItems.map((checklistItem) => {
                if (
                  checklistItem.isChecked === false &&
                  checklistItem.description === id
                ) {
                  return { ...checklistItem, isChecked: true };
                } else {
                  return { ...checklistItem, isChecked: false };
                }
              }),
            };
          } else {
            return checklist;
          }
        });
        return newChecklist;
      };
      return toggleCheckbox();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
