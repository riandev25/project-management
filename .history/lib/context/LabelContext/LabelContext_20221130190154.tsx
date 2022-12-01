import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { labelAction, ILabels, ProjectData } from '../../../interfaces/data';
import labelReducer from './labelReducer';

type LabelProviderProp = {
  children: ReactNode;
};

export const initialLabelState: ILabels[] = [
  // {
  //   id: 'meta-btn',
  //   name: 'Meta',
  //   bgColorStrip: 'bg-green-500',
  //   bgColor: 'bg-green-200 hover:bg-green-300',
  //   iconColor: 'text-green-500',
  //   isChecked: true,
  // },
];

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
