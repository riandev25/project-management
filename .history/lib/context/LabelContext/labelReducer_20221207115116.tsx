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
      console.log(labelOptionState);
      return labelOptionState;

    case 'UPDATE_LABEL':
      const { id } = action.payload;
      const { colorBg, colorIcon, colorBgStrip } = action.payload.data;
      const newLabelState = labelState.map((label) => {
        return label.id === id
          ? {
              ...label,
              bgColor: colorBg,
              iconColor: colorIcon,
              bgColorStrip: colorBgStrip,
            }
          : label;
      });
      return newLabelState;

    // case 'ADD_LABEL':
    //   const newAddedLabel = labelState.

    default:
      return { ...labelState };
  }
};

export default dataReducer;
