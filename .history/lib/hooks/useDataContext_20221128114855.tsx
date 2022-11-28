import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ProjectData } from '../../interfaces/data';

type DataContextProviderProps = {
  children: ReactNode;
};

interface DataContextType {
  data: ProjectData | null;
  setData: Dispatch<SetStateAction<ProjectData | null>>;
}

export const ProjectDataContext = createContext<DataContextType | null>(null);

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
