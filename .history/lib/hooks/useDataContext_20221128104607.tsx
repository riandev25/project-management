import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ProjectData } from '../../interfaces/data';

type DataContextProviderProps = {
  children: ReactNode;
};

type DataContextType = {
  data: ProjectData | null;
  setData: Dispatch<SetStateAction<ProjectData | null>>;
};

export const ProjectDataContext = createContext<DataContextType | null>(null);

export const ThemeContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [data, setData] = useState<ProjectData | null>(null);
  return (
    <ProjectDataContext.Provider value={{ data, setData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
