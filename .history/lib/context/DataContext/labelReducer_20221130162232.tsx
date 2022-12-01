import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      const newState = labelsState.forEach((item) => {
        if (item.id === action.payload) {
          return { ...item, isChecked: false };
        }
      });
      console.log(newState);

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
