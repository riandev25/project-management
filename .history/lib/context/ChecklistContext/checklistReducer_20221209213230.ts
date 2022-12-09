import {
  IChecklistArray,
  ChecklistAction,
} from '../../../interfaces/checklist';

const checklistReducer = (
  checklistData: IChecklistArray[],
  action: ChecklistAction
): IChecklistArray[] => {
  switch (action.type) {
    case 'ADD_CHECKLIST_TOGGLE':
      const addChecklistToggle = () => {
        // const newState = labelState.map((label) => {
        //   if (label.id === action.payload) {
        //     if (label.isChecked === false) {
        //       return { ...label, isChecked: true };
        //     } else {
        //       return { ...label, isChecked: false };
        //     }
        //   }
        //   return label;
        // });
        // return newState;
      };
      return addChecklistToggle();

    default:
      return { ...checklistData };
  }
};

export default checklistReducer;
