// Labels action
export type labelAction =
  | { type: 'LABEL_TOGGLE'; payload?: string }
  | { type: 'LABEL_OPTION_TOGGLE'; payload?: string };

// Labels data types
export interface ILabels {
  [x: string]: any;
  id: string;
  name?: string;
  bgColor?: string;
  bgColorStrip?: string;
  isDisplay?: boolean;
  iconColor?: string;
  isChecked?: boolean;
  isOpen?: boolean;
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
  labels: ILabels[];
}

export interface ProjectData {
  cardTitle?: string;
  cardChildren: CardChildren[];
}
