import { ILabels, LabelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: LabelAction
): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      return [...labelsState, { isChecked: true }];

    case 'REMOVE_LABEL':
      return [...labelsState, { isChecked: false }];

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
