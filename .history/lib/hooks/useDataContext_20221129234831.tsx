import { createContext, ReactNode, useReducer } from 'react';
import { Labels, ProjectData } from '../../interfaces/data';
import dataReducer from '../context/DataContext/dataReducer';

type DataContextProviderProps = {
  children: ReactNode;
  data: ProjectData[];
};

export const ProjectDataContext = createContext<ProjectData[]>(
  {} as ProjectData[]
);

export const ProjectDataContextProvider = ({
  children,
  data,
}: DataContextProviderProps) => {
  return (
    <ProjectDataContext.Provider value={data}>
      {children}
    </ProjectDataContext.Provider>
  );
};
