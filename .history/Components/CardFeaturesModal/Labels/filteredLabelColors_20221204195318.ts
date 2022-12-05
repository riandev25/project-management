import { ILabelColorProp } from '../../../interfaces/data';

export const filteredLabelColors = ({
  LabelColors,
  colorBg,
}: ILabelColorProp) => {
  const filteredColors = LabelColors.map((color) => {
    if (color.bgColor === colorBg) {
      if (color.bgColor === colorBg) {
        return { ...color, isActive: true };
      } else {
        return { ...color, isActive: true };
      }
    }
  });
  return filteredColors;
};
