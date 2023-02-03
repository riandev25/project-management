import { create } from 'zustand';
import produce from 'immer';

export interface IChecklistStateObject {
  _id: string;
  isAddCheckItem: boolean;
  isOptionOpen: boolean
}

export interface IChecklistState {
  checklistState: IChecklistStateObject[];
  toggleAddCheckitem: (event: React.MouseEvent<HTMLButtonElement>) => void
  toggleCheckitemOption: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  checklistState: [],
  toggleAddCheckitem: (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
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
