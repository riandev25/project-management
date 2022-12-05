import { CardChildren, ILabelToggle } from '../../../interfaces/data';

const labelToggle = ({ labels, action, paramObj }: ILabelToggle) => {
  const newState = labels.map((label) => {
    switch (paramObj) {
      case 'isChecked':
        if (label.id === action.payload) {
          if (label.isChecked === false) {
            return { ...label, isChecked: true };
          } else {
            return { ...label, isChecked: false };
          }
        }
        return label;
    }
  });
  return newState;
};
export default labelToggle;
