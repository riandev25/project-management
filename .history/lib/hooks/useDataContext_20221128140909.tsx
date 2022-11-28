import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ProjectData } from '../../interfaces/data';

type DataContextType = {
  data: ProjectData | null;
  setData: Dispatch<SetStateAction<ProjectData | null>>;
};

type DataContextProviderProps = {
  children: ReactNode;
};

export const ProjectDataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const ProjectDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [data, setData] = useState<ProjectData | null>(null);
  return (
    <ProjectDataContext.Provider value={{ data, setData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
