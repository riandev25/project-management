import {
  ILabelColorProp,
  ILabelColors,
  ILabels,
} from '../../../interfaces/data';

export const filteredColors = ({
  LabelColors,
  colorBg,
}: ILabelColorProp): ILabels[] => {
  const filteredLabelColors = LabelColors.map((color) => {
    if (color.bgColor === colorBg) {
      return { ...color, isActive: true };
    } else {
      return { ...color, isActive: true };
    }
  });
  return filteredLabelColors;
};
