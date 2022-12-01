import { createContext, ReactNode } from 'react';
import { ProjectData } from '../../../interfaces/data';

type LabelProviderProp = {
  children: ReactNode;
  value: ProjectData[];
};

export const LabelContext = createContext<ProjectData[]>({} as ProjectData[]);

export const LabelProvider = ({ children, value }: LabelProviderProp) => {
  return (
    <LabelContext.Provider value={value}>{children}</LabelContext.Provider>
  );
};
