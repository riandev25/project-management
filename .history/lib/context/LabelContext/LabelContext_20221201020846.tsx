import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { labelAction, ILabels, ILabelsBtn } from '../../../interfaces/data';
import labelReducer from './labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] | ILabelsBtn[] = [];

export const LabelContext = createContext<{
  labelsState: ILabels[];
  labelsBtnState: ILabelsBtn[];
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
