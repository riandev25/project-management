export interface ProjectData {
  cardTitle: string;
  children: {
    childTitle: string;
    desc: string;
    label: {
      id: string;
      name: string;
      bgColor: string;
      iconColor: string;
    }[];
  }[];
}
