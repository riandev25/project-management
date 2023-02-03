import { create } from 'zustand';
import produce from 'immer';

export interface IChecklistStateObject {
  _id: string;
  isAddCheckitem: boolean;
  isOptionOpen: boolean;
}

export interface IChecklistState {
  checklistState: IChecklistStateObject[];
  toggleAddCheckitem: (_id: string) => void;
  updateChecklistState: (filteredChecklist: IChecklistStateObject[]) => void;
  toggleCheckitemOption: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  checklistState: [],
  updateChecklistState(filteredChecklist) {
    set(
      produce((state) => {
        state.checklistState = filteredChecklist;
      })
    );
  },
  toggleAddCheckitem: (_id) => {
    // const _id = String(event.currentTarget.dataset.id);
    set(
      produce((state) => {
        const itemToUpdate = state.checklistState.find(
          (item: IChecklistStateObject) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isAddCheckItem = !itemToUpdate.isAddCheckItem;
      })
    );
  },
  toggleCheckitemOption: (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    set(
      produce((state) => {
        const itemToUpdate = state.checklistState.find(
          (item: IChecklistStateObject) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isOptionOpen = !itemToUpdate.isOptionOpen;
      })
    );
  },
}));
