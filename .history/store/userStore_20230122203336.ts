import { create } from 'zustand';

interface IBoardStore {
  isModalOpen: boolean;
  toggleModalOpen: () => void;
}

export const useBoardStore = create<IBoardStore>()((set) => ({
  isModalOpen: false,
  toggleModalOpen: () => {
    set((state) => ({ isModalOpen: !state.isModalOpen }));
  },
}));
