// Labels action
export type LabelAction = { type: 'ADD_LABEL' } | { type: 'REMOVE_LABEL' };

// Labels data types
export interface ILabels {
  id: string;
  name: string;
  bgColor: string;
  bgColorStrip: string;
  isChecked: boolean;
  iconColor: string;
}

export interface LabelProp {
  labels: ILabels[];
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
