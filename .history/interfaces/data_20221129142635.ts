export interface Labels {
  id: string;
  name: string;
  bgColor: string;
  bgColorStrip: string;
  iconColor: string;
  isChecked: boolean;
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
