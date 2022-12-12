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
              { id: idCheck, description, isChecked: false },
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

    case 'CHECKLIST_PERCENTAGE':
      const { id, percentage } = action.payload;
      const checklistPercentage = () => {
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === id) {
            return { ...checklist, percentage };
          } else {
            return checklist;
          }
        });
        return newChecklist;
      };
      return checklistPercentage();

    case 'ADD_CHECKLIST':
      const addChecklist = () => {
        const { title, description, idCheckArray } = action.payload;
        // const newChecklist = [...checklistData, { title, id: idCheckArray }]
        const newChecklistItem = [{ id: 0, description, isChecked: false }];
        const newChecklist = [
          ...checklistData,
          {
            title,
            id: idCheckArray,
            percentage: 0,
            checklistItems: newChecklistItem,
          },
        ];
        console.log(newChecklist);
        return newChecklist;
      };
      return addChecklist();

    case 'DELETE_CHECKLIST':
      const deleteChecklist = () => {
        const id = action.payload.id;
        return checklistData.filter((checklist) => checklist.id !== id);
      };
      return deleteChecklist();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
