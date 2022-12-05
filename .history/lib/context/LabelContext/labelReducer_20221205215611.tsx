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

    case 'LABEL_OPTION_TOGGLE':
      const labelOptionState = labelState.map((label) => {
        if (label.id === action.payload) {
          if (label.isOpen === false) {
            return { ...label, isOpen: true };
          } else {
            return { ...label, isOpen: false };
          }
        }
        return label;
      });
      return labelOptionState;

    case 'UPDATE_LABEL':
      const newLabelState = labelState.map((label) => {
        if (label.id === action.payload.id) {
          return { ...label, bgColor: action.payload.colorBg };
        } else {
          return label;
        }
      });
      console.log(action.payload.id);
      return newLabelState;

    default:
      return { ...labelState };
  }
};

export default dataReducer;
