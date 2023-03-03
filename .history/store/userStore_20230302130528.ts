import { create } from 'zustand';

interface IBoardStore {
  isModalOpen: boolean;
  isOptionOpen: boolean
  toggleModal: () => void;
  toggleOption: () => void
}

export const userStore = create<IBoardStore>()((set) => ({
  isModalOpen: false,
  isOptionOpen: false,
  toggleModal: () => {
    set((state) => ({ isModalOpen: !state.isModalOpen }));
  },
  toggleOption: () => {
    set((state) => ({ isModalOpen: !state.isOptionOpen }));
  },
}));
