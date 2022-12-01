import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      labelsState.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = false;
        }
      });
      return [...labelsState];

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
