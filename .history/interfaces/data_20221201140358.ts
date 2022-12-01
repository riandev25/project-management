// Labels action
export type labelAction =
  | { type: 'LABEL_TOGGLE'; payload?: string }
  | { type: 'MOUNT_LABEL' };

// Labels data types
export interface ILabels {
  [x: string]: any;
  id?: string;
  name?: string;
  bgColor?: string;
  bgColorStrip?: string;
  isChecked?: boolean;
  iconColor?: string;
}

export interface LabelProp {
  id: string;
  name: string;
  bgColor: string;
  bgColorStrip: string;
  isChecked: boolean;
  iconColor: string;
}

export interface CardChildren {
  childTitle?: string;
  desc?: string;
  labelsDisplay: ILabels[];
  labelsBtn: ILabels[];
}

export interface ProjectData {
  cardTitle?: string;
  cardChildren: CardChildren[];
}
