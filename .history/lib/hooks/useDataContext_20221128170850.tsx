import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ProjectData, Labels } from '../../interfaces/data';

// type DataContextType = {
//   data: ProjectData | null;
//   setData: Dispatch<SetStateAction<ProjectData | null>>;
// };

type DataContextProviderProps = {
  children: ReactNode;
  value: Labels;
};

export const ProjectDataContext = createContext<Labels>({} as Labels);

export const ProjectDataContextProvider = ({
  children,
  value,
}: DataContextProviderProps) => {
  // const [data, setData] = useState<ProjectData | null>(null);
  return (
    <ProjectDataContext.Provider value={value}>
      {children}
    </ProjectDataContext.Provider>
  );
};
