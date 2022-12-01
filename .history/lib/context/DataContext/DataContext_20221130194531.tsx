import { createContext, ReactNode } from 'react';
import { ProjectData } from '../../../interfaces/data';

type LabelProviderProp = {
  children: ReactNode;
  value: ProjectData[];
};

export const DataContext = createContext<ProjectData[]>({} as ProjectData[]);

export const DataProvider = ({ children, value }: LabelProviderProp) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
