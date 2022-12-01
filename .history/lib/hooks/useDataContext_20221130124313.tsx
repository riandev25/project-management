import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { labelAction, ILabels, ProjectData } from '../../interfaces/data';
import labelReducer from '../context/DataContext/labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] = [];

export const LabelContext = createContext<{
  labelsState: ILabels[];
  dispatchLabel: Dispatch<labelAction>;
}>({
  labelsState: initialLabelState,
  dispatchLabel: () => undefined,
});

export const LabelProvider = ({ children }: LabelProviderProp) => {
  const [labelsState, dispatchLabel] = useReducer(
    labelReducer,
    initialLabelState
  );
  return (
    <LabelContext.Provider value={{ labelsState, dispatchLabel }}>
      {children}
    </LabelContext.Provider>
  );
};
