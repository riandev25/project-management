import { create } from 'zustand';

interface IBoardStore {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const useBoardStore = create<IBoardStore>()((set) => ({
  isModalOpen: false,
  toggleModal: () => {
    set((state) => ({ isModalOpen: !state.isModalOpen }));
  },
}));