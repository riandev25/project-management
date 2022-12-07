import { ILabelColorProp, ILabelColors } from '../../../interfaces/data';

export const filteredColors = ({
  LabelColors,
  colorBg,
}: ILabelColorProp): ILabelColors[] => {
  const filteredLabelColors = LabelColors.map((color) => {
    if (color.bgColor === colorBg) {
      return { ...color, isActive: true };
    } else {
      return { ...color, isActive: false };
    }
  });
  return filteredLabelColors;
};
