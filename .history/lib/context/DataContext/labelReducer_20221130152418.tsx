import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      console.log(action.payload);
      return [{ isChecked: true }];

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
