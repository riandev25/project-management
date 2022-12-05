import { CardChildren } from '../../../interfaces/data';

const labelToggle = ({ labels, action }: CardChildren) => {
  const newState = labels.map((label) => {
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
export default labelToggle;
