import { ILabelColorProp } from '../../../interfaces/data';

export const filteredColors = ({ LabelColors, colorBg }: ILabelColorProp) => {
  const filteredLabelColors = LabelColors.map((color) => {
    if (color.bgColor === colorBg) {
      if (color.bgColor === colorBg) {
        return { ...color, isActive: true };
      } else {
        return { ...color, isActive: true };
      }
    }
  });
  return filteredLabelColors;
};
