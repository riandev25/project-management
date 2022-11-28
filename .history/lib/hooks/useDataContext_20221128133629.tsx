import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Labels } from '../../interfaces/data';

type DataContextType = {
  data: Labels | null;
  setData: Dispatch<SetStateAction<Labels | null>>;
};

type DataContextProviderProps = {
  children: ReactNode;
};

export const LabelsContext = createContext<DataContextType>(
  {} as DataContextType
);

export const LabelsContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [data, setData] = useState<Labels | null>(null);
  return (
    <LabelsContext.Provider value={{ data, setData }}>
      {children}
    </LabelsContext.Provider>
  );
};
