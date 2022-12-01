import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { LabelAction, ILabels, ProjectData } from '../../interfaces/data';
import labelReducer from '../context/DataContext/labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] = [];

export const LabelContext = createContext<{
  state: ILabels[];
  dispatch: Dispatch<LabelAction>;
}>({
  state: initialLabelState,
  dispatch: () => undefined,
});

export const ProjectDataContextProvider = ({ children }: LabelProviderProp) => {
  const [state, dispatch] = useReducer(labelReducer, initialLabelState);
  return (
    <LabelContext.Provider value={{ state, dispatch }}>
      {children}
    </LabelContext.Provider>
  );
};
