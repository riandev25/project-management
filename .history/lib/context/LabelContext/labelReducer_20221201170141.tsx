import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (labelState: ILabels[], action: labelAction): ILabels[] => {
  switch (action.type) {
    case 'LABEL_TOGGLE':
      const newState = labelState.map((label) => {
        if (label.id === action.payload) {
          if (label.isChecked === false) {
            return { ...label, isChecked: true };
          } else {
            return { ...label, isChecked: false };
          }
        }
        return label;
      });
      return newState;

    default:
      return { ...labelState };
  }
};

export default dataReducer;
