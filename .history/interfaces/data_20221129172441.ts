// Labels action
export type LabelAction = { type: 'ADD_LABEL' } | { type: 'REMOVE_LABEL' };

// Labels data types
export type Labels = {
  id: string;
  name: string;
  bgColor: string;
  bgColorStrip: string;
  iconColor: string;
  isChecked: boolean;
};

export type LabelProp = Labels[];

export interface CardChildren {
  childTitle?: string;
  desc?: string;
  labels: Labels[];
}

export interface ProjectData {
  cardTitle: string;
  cardChildren: CardChildren[];
}
