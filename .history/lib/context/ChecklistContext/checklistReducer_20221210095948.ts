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
        // const newChecklistItems = checklistData.map((checklist) => {
        //   return checklist.title === title
        //     ? { ...checklist, description, isChecked: false }
        //     : checklist;
        // });
        // console.log(newChecklistItems);
        // return newChecklistItems;
        console.log(checklistData);
        return checklistData;
      };
      return addChecklistItem();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
