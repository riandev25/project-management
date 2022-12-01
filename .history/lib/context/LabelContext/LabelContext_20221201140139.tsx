import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { labelAction, ILabels } from '../../../interfaces/data';
import labelReducer from './labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] = [];

export const LabelContext = createContext<{
  labelsState: ILabels[];
  labelsBtnState: ILabels[];
  dispatchLabel: Dispatch<labelAction>;
  dispatchBtnLabel: Dispatch<labelAction>;
}>({
  labelsState: initialLabelState,
  labelsBtnState: initialLabelState,
  dispatchLabel: () => undefined,
  dispatchBtnLabel: () => undefined,
});

export const LabelProvider = ({ children }: LabelProviderProp) => {
  const [labelsState, dispatchLabel] = useReducer(
    labelReducer,
    initialLabelState
  );

  const [labelsBtnState, dispatchBtnLabel] = useReducer(
    labelReducer,
    initialLabelState
  );

  return (
    <LabelContext.Provider
      value={{ labelsState, dispatchLabel, labelsBtnState, dispatchBtnLabel }}
    >
      {children}
    </LabelContext.Provider>
  );
};
