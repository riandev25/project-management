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
      const { colorBg, colorIcon, colorBgStrip, id, colorBgHover } =
        action.payload;
      const newLabelState = labelState.map((label) => {
        return label.id === id
          ? {
              ...label,
              bgColor: colorBg,
              iconColor: colorIcon,
              bgColorStrip: colorBgStrip,
              bgColorHover: colorBgHover,
            }
          : label;
      });
      return newLabelState;

    // case 'CREATE_LABEL':
    //   const {colorBg, colorIcon, colorBgStrip} = action.payload
    //   const newAddedLabel = labelState.map((label) => {
    //     if ()
    //   })

    default:
      return { ...labelState };
  }
};

export default dataReducer;
