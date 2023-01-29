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
        state.modalState = payload;
      })
    );
  },
  toggleModal: (_id) => {
    set(
      produce((state) => {
        const a = state.modalState;
        const b = a.find((modal: any) => modal._id === _id);
        if (b) {
          b.isOpen = !b.isOpen;
        }
        console.log(b);
      })
    );
  },
}));
