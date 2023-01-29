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
      produce((draft) => {
        // const a = get().modalState;
        // console.log(a);
        if (draft.modalState.length > 0) {
          const itemToUpdate = draft.modalState.find(
            (item: any) => item._id === _id
          );
          // console.log(itemToUpdate);
          itemToUpdate.isOpen = !itemToUpdate.isOpen;
        } else {
          console.log('Empty');
        }
      })
    );
  },
}));
