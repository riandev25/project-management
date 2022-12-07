import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Dispatch, SetStateAction } from 'react';

// Labels action
export type labelAction =
  | { type: 'LABEL_TOGGLE'; payload?: string }
  | { type: 'LABEL_OPTION_TOGGLE'; payload?: string }
  | { type: 'UPDATE_LABEL'; payload: IUpdateData };

// Labels data types

export interface IUpdateData {
  id: string;
  data: {
    colorBg: string;
    colorIcon: string;
    colorBgStrip: string;
  };
}
export interface ILabelColors {
  id: string;
  bgColor: string;
  bgColorStrip: string;
  bgHoverColor: string;
  iconColor: string;
  isActive: boolean;
}

export interface ILabelColorProp {
  LabelColors: ILabelColors[];
  colorBg?: string;
}
export interface ILabels {
  [x: string]: any;
  id?: string;
  name?: string;
  bgColor: string;
  bgColorHover?: string;
  bgColorStrip: string;
  isDisplay?: boolean;
  iconColor: string;
  icon: IconProp;
  isChecked?: boolean;
  isDisabled?: boolean;
  fullWidth: boolean;
  isOpen?: boolean;
}

export interface CardChildren {
  childTitle?: string;
  desc?: string;
  labels: ILabels[];
}

export interface ProjectData {
  cardTitle?: string;
  cardChildren: CardChildren[];
}
