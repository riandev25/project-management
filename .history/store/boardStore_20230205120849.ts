import { create } from 'zustand';
import produce from 'immer';

export interface IBoardComponent {
  _id: string;
  isOpen: boolean;
  isCardOptionOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
  updateModalState: (payload: IBoardComponent[]) => void;
  toggleModal: (_id: string) => void;
  toggleCardOption: (_id: string) => void;
}

export const boardStore = create<IBoardStore>()((set, get) => ({
  modalState: [],
  updateModalState: (payload) => {
    set(
      produce((state) => {
        state.modalState = payload;
      })
    );
  },
  toggleModal: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.modalState.find(
          (item: IBoardComponent) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isOpen = !itemToUpdate.isOpen;
      })
    );
  },
  toggleCardOption: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.modalState.find(
          (item: IBoardComponent) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isCardOptionOpen = !itemToUpdate.isCardOptionOpen;
      })
    );
    console.log(get().modalState);
  },
}));
