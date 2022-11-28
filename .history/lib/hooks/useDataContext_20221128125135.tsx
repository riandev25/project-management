import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ProjectData, Labels } from '../../interfaces/data';

type DataContextType = {
  data: Labels | null;
  setData: Dispatch<SetStateAction<Labels | null>>;
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
  const [data, setData] = useState<Labels | null>(null);
  return (
    <ProjectDataContext.Provider value={{ data, setData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
