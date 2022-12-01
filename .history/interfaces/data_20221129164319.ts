// Labels action
export type LabelAction = { type: 'ADD_LABEL' } | { type: 'REMOVE_LABEL' };

// Labels data types
export interface Labels {
  id: string;
  name: string;
  bgColor: string;
  bgColorStrip: string;
  iconColor: string;
  isChecked: boolean;
}

export interface LabelsState {
  label: Labels[];
}

export interface CardChildren {
  childTitle?: string;
  desc?: string;
  labels: Labels[];
}

export interface ProjectData {
  cardTitle: string;
  cardChildren: CardChildren[];
}
