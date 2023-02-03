import { create } from 'zustand';
import produce from 'immer';

export interface IAddCheckItem {
  _id: string;
  isAddCheckItem: boolean;
}

export interface IChecklistState {
  addCheckItem: IAddCheckItem[];
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  addCheckItem: [],
  toggleAddCheckItem: () => {
    set(
      produce((state) => {
        state.isAddCheckItem = !state.isAddCheckItem;
      })
    );
  },
}));
