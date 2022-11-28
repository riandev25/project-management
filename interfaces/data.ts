export interface Labels {
  id: string;
  name: string;
  bgColor: string;
  iconColor: string;
}

export interface CardChildren {
  childTitle: string;
  desc?: string;
  labels: Labels[];
}

export interface ProjectData {
  cardTitle: string;
  cardChildren: CardChildren[];
}
