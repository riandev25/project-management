import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      const newState = labelsState.map((item) => {
        if (item.id === action.payload) {
          if (item.isChecked === false) {
            return { ...item, isChecked: true };
          } else {
            return { ...item, isChecked: false };
          }
        }
        return item;
      });
      console.log(newState);
      return newState;

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
