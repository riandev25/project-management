import { create } from 'zustand';
import produce from 'immer';

interface IBoardComponent {
  _id: string;
  isOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
}

export const boardStore = create<IBoardStore>()((set, get) => ({
  modalState: [],
  updateModalState: (payload: IBoardStore) => {
    set(
      produce((state) => {
        const modal = [...state.modalState, payload];
      })
    );
  },
  toggleModal: (_id: string) => {
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
