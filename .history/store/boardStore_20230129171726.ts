import { create } from 'zustand';
import produce from 'immer';
import { removeLocalStorage } from '../lib/utils/localStorage';

export interface IBoardComponent {
  _id: string;
  isOpen: boolean;
}

interface IBoardStore {
  modalState: IBoardComponent[];
  updateModalState: (payload: IBoardComponent[]) => void;
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => {
    set(
      produce((state) => {
        const _id = String(event.currentTarget.dataset.id)
        const itemToUpdate = state.modalState.find(
          (item: IBoardComponent) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isOpen = !itemToUpdate.isOpen;
      })
    );
    removeLocalStorage('idCard');
    // console.log(get().modalState);
  },
}));
