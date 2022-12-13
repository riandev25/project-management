import {
  IChecklistArray,
  ChecklistAction,
} from '../../../interfaces/checklist';

interface Ias {
  isOptionOpen?: boolean;
  isOk?: boolean;
}

const checklistReducer = (
  checklistData: IChecklistArray[],
  action: ChecklistAction
): IChecklistArray[] => {
  // const changeChecklistItem = (item: Ias, action: ChecklistAction) => {

  // }

  switch (action.type) {
    case 'ADD_CHECKLIST_ITEM':
      const addChecklistItem = () => {
        const { idCheckArray, idCheck, description } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === idCheckArray) {
            const newChecklistItems = [
              ...checklist.checklistItems,
              {
                id: idCheck,
                description,
                isChecked: false,
                isOptionOpen: false,
              },
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
        const newChecklistItem = [
          { id: 0, description, isChecked: false, isOptionOpen: false },
        ];
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

    case 'TOGGLE_OPTION':
      const toggleOption = () => {
        const { idCheckArray, idCheck, idBtn } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === idCheckArray) {
            const newChecklistItems = checklist.checklistItems.map(
              (checklistItem) => {
                if (checklistItem.id === idCheck && idBtn === 'option-btn') {
                  return checklistItem.isOptionOpen === false
                    ? { ...checklistItem, isOptionOpen: true }
                    : { ...checklistItem, isOptionOpen: false };
                } else if (checklistItem.id === idCheck) {
                  return checklistItem.isOptionOpen === false
                    ? { ...checklistItem, isOptionOpen: true }
                    : { ...checklistItem, isOptionOpen: false };
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
        return newChecklist;
      };
      return toggleOption();

    case 'DELETE_CHECKLIST_ITEM':
      const deleteChecklistItem = () => {
        const { idCheckArray, idCheck, idBtn } = action.payload;
        const newChecklist = checklistData.map((checklist) => {
          if (checklist.id === idCheckArray && idBtn === 'option-btn') {
            const newChecklistItems = checklist.checklistItems.filter(
              (checklistItems) => checklistItems.id !== idCheck
            );
            return { ...checklist, checklistItems: newChecklistItems };
          } else {
            return checklist;
          }
        });
        console.log(newChecklist);
        return newChecklist;
      };
      return deleteChecklistItem();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
