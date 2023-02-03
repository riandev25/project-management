import { create } from 'zustand';
import produce from 'immer';

export interface IChecklistState {
  isAddCheckItem: boolean;
  toggleAddCheckItem: () => void;
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  isAddCheckItem: false,
  toggleAddCheckItem: () => {
    set(
      produce((state) => {
        state.isAddCheckItem = !state.isAddCheckItem;
      })
    );
  },
}));
