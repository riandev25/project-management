import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { labelAction, ILabels } from '../../../interfaces/data';
import labelReducer from './labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] = [];

export const LabelContext = createContext<{
  labelState: ILabels[];
  dispatchLabel: Dispatch<labelAction>;
}>({
  labelState: initialLabelState,
  dispatchLabel: () => undefined,
});

export const LabelProvider = ({ children }: LabelProviderProp) => {
  const [labelState, dispatchLabel] = useReducer(
    labelReducer,
    initialLabelState
  );

  return (
    <LabelContext.Provider value={{ labelState, dispatchLabel }}>
      {children}
    </LabelContext.Provider>
  );
};
