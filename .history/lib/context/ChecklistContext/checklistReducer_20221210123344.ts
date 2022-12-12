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
        console.log(title);
        const newChecklist = checklistData.map((checklist) => {
          return checklist;
        });
        console.log(newChecklist);
        return newChecklist;
      };
      return addChecklistItem();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
