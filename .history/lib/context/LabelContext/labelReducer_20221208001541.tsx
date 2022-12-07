import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (labelState: ILabels[], action: labelAction): ILabels[] => {
  switch (action.type) {
    case 'LABEL_TOGGLE':
      const labelToggle = () => {
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
      };
      return labelToggle();

    case 'LABEL_OPTION_TOGGLE':
      const labelOptionToggle = () => {
        console.log(action.payload);
        const newState = labelState.map((label) => {
          if (
            label.id === action.payload ||
            action.payload === 'create-exit-btn'
          ) {
            if (label.isOpen === false) {
              return { ...label, isOpen: true };
            } else {
              return { ...label, isOpen: false };
            }
          }
          return label;
        });
        return newState;
      };
      return labelOptionToggle();

    case 'UPDATE_LABEL':
      const updateLabel = () => {
        const { id, bgColor, iconColor, bgColorStrip, bgColorHover } =
          action.payload;
        const newState = labelState.map((label) => {
          return label.id === id
            ? {
                ...label,
                bgColor,
                iconColor,
                bgColorStrip,
                bgColorHover,
              }
            : label;
        });
        return newState;
      };
      return updateLabel();

    case 'CREATE_LABEL':
      const createLabel = () => {
        const { bgColor, iconColor, bgColorStrip, bgColorHover, name } =
          action.payload;
        const newState = [
          ...labelState,
          {
            id: name,
            name,
            bgColorStrip,
            bgColor,
            bgColorHover,
            iconColor,
            isChecked: false,
            isOpen: false,
          },
        ];
        return newState;
      };
      return createLabel();

    case 'DELETE_LABEL':
      const deleteLabel = () => {
        // const newArray = labelState.filter(
        //   (label) => label.id !== action.payload
        // );
        // console.log(newArray);
        // return newArray;
        console.log(labelState);
        return labelState;
      };
      return deleteLabel();

    default:
      return { ...labelState };
  }
};

export default dataReducer;
