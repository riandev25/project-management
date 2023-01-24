import { create } from 'zustand';

interface IBoardStore {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const boardStore = create<IBoardStore>()((set) => ({
  isModalOpen: false,
  toggleModal: () => {
    set((state) => ({ isModalOpen: !state.isModalOpen }));
  },
}));
