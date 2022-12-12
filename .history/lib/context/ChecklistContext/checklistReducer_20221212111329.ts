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
        const { idCheckArray, idCheck, description } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === idCheckArray) {
            const newChecklistItems = [
              ...checklist.checklistItems,
              { idCheck, description, isChecked: false },
            ];
            return { ...checklist, checklistItems: newChecklistItems };
          } else {
            return checklist;
          }
        });
        console.log(newChecklist);
        return newChecklist;
      };
      return addChecklistItem();

    case 'TOGGLE_CHECKBOX':
      const toggleCheckbox = () => {
        const { idCheckArray, idCheck } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === idCheckArray) {
            const newChecklistItems = checklist.checklistItems.map(
              (checklistItem) => {
                if (checklistItem.id === idCheck) {
                  return checklistItem.isChecked === false
                    ? { ...checklistItem, isChecked: true }
                    : { ...checklistItem, isChecked: false };
                } else {
                  return checklistItem;
                }
              }
            );
            return {
              ...checklist,
              checklistItems: newChecklistItems,
            };
          } else {
            return checklist;
          }
        });
        console.log(newChecklist);
        return newChecklist;
      };
      return toggleCheckbox();

    // case 'CHECKLIST_PERCENTAGE':
    //   const newChecklist = checklistData.map((checklist) => {
    //     if (checklist.title === title) {
    //       const
    //     }
    //   })

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
