import { create } from 'zustand';
import produce from 'immer';

export interface IBoardComponent {
  _id: string;
  isOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
  updateModalState: (payload: IBoardComponent[]) => void;
  toggleModal: (_id: string) => void;
}

export const boardStore = create<IBoardStore>()((set, get) => ({
  modalState: [],
  updateModalState: (payload) => {
    set(
      produce((state) => {
        console.log(state.modalState);
        state.modalState = payload;
      })
    );
  },
  toggleModal: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.modalState.find(
          (item: IBoardComponent) => item.isOpen === false
        );
        console.log(itemToUpdate);
        if (itemToUpdate) {
          itemToUpdate.isOpen = !itemToUpdate.isOpen;
        }
      })
    );
    console.log(get().modalState);
  },
}));