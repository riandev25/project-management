export interface Labels {
  id: string;
  name: string;
  bgColor: string;
  iconColor: string;
}

export interface Children {
  childTitle: string;
  desc: string;
  labels: Labels[];
}

export interface Project {
  cardTitle: string;
  children: Children[];
}

export interface ProjectData {
  project: Project[];
}
