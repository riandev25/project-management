import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import {
  IChecklistArray,
  ChecklistAction,
} from '../../../interfaces/checklist';
import checklistReducer from './checklistReducer';

type ChecklistProviderProp = {
  children: ReactNode;
};

export const initialChecklist: IChecklistArray[] = [];

export const ChecklistContext = createContext<{
  checklistData: IChecklistArray[];
  dispatchChecklist: Dispatch<ChecklistAction>;
}>({
  checklistData: initialChecklist,
  dispatchChecklist: () => undefined,
});

export const ChecklistProvider = ({ children }: ChecklistProviderProp) => {
  const [checklistData, dispatchChecklist] = useReducer(
    checklistReducer,
    initialChecklist
  );

  return (
    <ChecklistContext.Provider value={{ checklistData, dispatchChecklist }}>
      {children}
    </ChecklistContext.Provider>
  );
};
