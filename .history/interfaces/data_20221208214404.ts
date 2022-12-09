import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Dispatch, SetStateAction } from 'react';

// Labels action
export type labelAction =
  | { type: 'LABEL_TOGGLE'; payload?: string }
  | { type: 'LABEL_OPTION_TOGGLE'; payload?: string }
  | { type: 'UPDATE_LABEL'; payload: IUpdateData }
  | { type: 'CREATE_LABEL'; payload: ILabelOption }
  | { type: 'DELETE_LABEL'; payload: string }
  | { type: 'SEARCH_LABEL'; payload: { value: string; setArray: any } };

// Labels data types
// export interface ICreateData extends IUpdateData {
//   name: string;
//   isChecked:
// }

export interface IUpdateData {
  id: string;
  bgColor: string;
  iconColor: string;
  bgColorStrip: string;
  bgColorHover: string;
  name: string;
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
export interface ILabelOption extends ILabels {
  [x: string]: any;
  // isDisplay?: boolean;
  // icon: IconProp;
  // isDisabled: boolean;
  // fullWidth: boolean;
  // isCreate: boolean;
  isDisplay?: boolean;
  icon: IconProp;
  isDisabled?: boolean;
  fullWidth?: boolean;
  isCreate?: boolean;
  // onUpdateData(): Function; // FOR REVIEW
}

export interface ILabels {
  // [x: string]: any;
  id?: string;
  name?: string;
  bgColorStrip: string;
  bgColor: string;
  bgColorHover?: string;
  iconColor: string;
  isChecked?: boolean;
  isOpen?: boolean;
  isBelong?: boolean;
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
