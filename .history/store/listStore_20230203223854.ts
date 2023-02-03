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
        const itemToUpdate = state.listState.find(
          (item: IListState) => item._id === _id
        );
        console.log(_id);
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isAddCardOpen = !itemToUpdate.isAddCardOpen;
      })
    );
    console.log(get().listState);
  },
  toggleCardOption: (_id) => {
    set(
      produce((state) => {
        const itemToUpdate = state.listState.find(
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
