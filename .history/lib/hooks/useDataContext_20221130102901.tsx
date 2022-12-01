import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { LabelAction, ILabels, ProjectData } from '../../interfaces/data';
import dataReducer from '../context/DataContext/labelReducer';

type DataContextProviderProps = {
  children: ReactNode;
  value: ProjectData[];
};

export const initialLabelState: ILabels[] = [];

export const LabelContext = createContext<{
  state: ILabels[];
  dispatch: Dispatch<LabelAction>;
}>({
  state: initialLabelState,
  dispatch: () => undefined,
});

export const ProjectDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [state, dispatch] = useReducer(dataReducer, initialLabelState);
  return (
    <LabelContext.Provider value={{ state, dispatch }}>
      {children}
    </LabelContext.Provider>
  );
};
