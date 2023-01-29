import { create } from 'zustand';
import produce from 'immer';

interface IBoardComponent {
  _id: string;
  isOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
  updateModalState: (payload: any) => void;
  toggleModal: (_id: string) => void;
}

export const boardStore = create<IBoardStore>()((set, get) => ({
  modalState: [],
  updateModalState: (payload) => {
    set(
      produce((state) => {
        const modal = [...state.modalState, ...payload];
      })
    );
  },
  toggleModal: (_id) => {
    set(
      produce((state) => {
        const modal = state.modalState.find(
          (modal: IBoardComponent) => modal._id === _id
        );
        modal.isOpen = !modal.isOpen;
      })
    );
  },
}));
