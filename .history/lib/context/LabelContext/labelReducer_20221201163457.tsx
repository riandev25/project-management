import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'LABEL_TOGGLE':
      console.log(action.payload);
      const newState = labelsState.map((label) => {
        if (label.id === action.payload) {
          if (label.isChecked === false) {
            return { ...label, isChecked: true };
          }
        }
        return label;
      });
      console.log(newState[0].isChecked);
      return newState;

    default:
      return { ...labelsState };
  }
};

export default dataReducer;
