import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      const mutate = labelsState.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = true;
        }
        console.log(mutate);
      });
      return [...labelsState];

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
