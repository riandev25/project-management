import { create } from 'zustand';
import produce from 'immer';

export interface IBoardComponent {
  _id: string;
  isOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
  updateModalState: (payload: IBoardComponent[]) => void;
  toggleModal: (_id: string, modalState: IBoardComponent[]) => void;
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
  toggleModal: (_id, modalState) => {
    set(
      produce((state) => {
        // const a = get().modalState;
        // console.log(a);
        const itemToUpdate = modalState.find((item) => item.isOpen === false);
        console.log(modalState);
        if (itemToUpdate) {
          itemToUpdate.isOpen = !itemToUpdate.isOpen;
        }
        // console.log(get().modalState[0]);
      })
    );
  },
}));
