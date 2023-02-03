import { create } from 'zustand';
import produce from 'immer';

export interface IListState {
  _id?: string;
  isAddCardOpen: boolean;
  isOptionOpen: boolean;
}

interface IBoardStore {
  listState: IListState[];
  updateListState: (payload: IListState[]) => void;
  toggleAddCard: (_id: string) => void;
  toggleCardOption: (_id: string) => void;
}

export const listStore = create<IBoardStore>()((set, get) => ({
  listState: [],
  updateListState: (payload) => {
    set(
      produce((state) => {
        state.listState = payload;
      })
    );
  },
  toggleAddCard: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.modalState.find(
          (item: IListState) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isCardOpen = !itemToUpdate.isCardOpen;
      })
    );
  },
  toggleCardOption: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.modalState.find(
          (item: IListState) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isOptionOpen = !itemToUpdate.isOptionOpen;
      })
    );
  },
}));
