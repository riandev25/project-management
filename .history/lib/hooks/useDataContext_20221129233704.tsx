import { createContext, ReactNode, useReducer } from 'react';
import { Labels, ProjectData } from '../../interfaces/data';
import dataReducer from '../context/DataContext/dataReducer';

type DataContextProviderProps = {
  children: ReactNode;
  value: ProjectData[];
};

export const ProjectDataContext = createContext<ProjectData[]>(
  {} as ProjectData[]
);

export const ProjectDataContextProvider = ({
  children,
  value,
}: DataContextProviderProps) => {
  return (
    <ProjectDataContext.Provider value={value}>
      {children}
    </ProjectDataContext.Provider>
  );
};
