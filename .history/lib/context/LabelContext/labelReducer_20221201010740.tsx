import { ILabels, labelAction } from '../../../interfaces/data';

const dataReducer = (
  labelsState: ILabels[],
  action: labelAction
): ILabels[] => {
  switch (action.type) {
    case 'LABEL_TOGGLE':
      // const filteredState = labelsState.filter(
      //   (filtered) => filtered.isChecked === true
      // );
      // console.log(filteredState);
      console.log(action.payload);
      const newState = labelsState.map((label) => {
        if (label.id === action.payload) {
          if (!label.isChecked) {
            return { ...label, isChecked: true };
          } else {
            return { ...label, isChecked: false };
          }
        }
        return label;
      });
      return newState;

    default:
      return { ...labelsState };
  }
};

export default dataReducer;