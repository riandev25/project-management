import { create } from 'zustand';
import produce from 'immer';

export interface IChecklistStateObject {
  _id: string;
  isAddCheckitem: boolean;
}

export interface IChecklistState {
  checklistState: IChecklistStateObject[];
  toggleAddCheckitem: (_id: string) => void;
  updateChecklistState: (filteredChecklist: IChecklistStateObject[]) => void;
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  checklistState: [],
  updateChecklistState(filteredChecklist) {
    set(
      produce((state) => {
        state.checklistState = filteredChecklist;
      })
    );
  },
  toggleAddCheckitem: (_id) => {
    // const _id = String(event.currentTarget.dataset.id);
    set(
      produce((state) => {
        const itemToUpdate = state.checklistState.find(
          (item: IChecklistStateObject) => item._id === _id
        );
        if (!itemToUpdate) return;
        itemToUpdate.isAddCheckItem = !itemToUpdate.isAddCheckItem;
      })
    );
  },
}));

// Checkitem store

export interface ICheckitemModals {
  _id?: string;
  isOptionOpen: boolean;
}

export interface ICheckitemState {
  checkitemState: ICheckitemModals[];
  updateCheckitemState: (filteredCheckitem: ICheckitemModals[]) => void;
  toggleOptionState: (_id: string, name: string) => void;
}

export const checkitemStore = create<ICheckitemState>()((set, get) => ({
  checkitemState: [],
  updateCheckitemState(filteredCheckitem) {
    set(
      produce((state) => {
        state.checklistState = filteredCheckitem;
      })
    );
  },
  toggleOptionState: (_id, name) => {
    set(
      produce((state) => {
        const itemToUpdate = state.checkitemState.find(
          (checkitem: ICheckitemModals) => checkitem._id === _id
        );
        if (!itemToUpdate) return;
        if (name === 'option-btn')
          itemToUpdate.isOptionOpen === !itemToUpdate.isOptionOpen;
      })
    );
  },
  // toggleCheckitemOption: (_id, i) => {
  //   // const _id = String(event.currentTarget.dataset.id);
  //   set(
  //     produce((state) => {
  //       const itemToUpdate = state.checklistState.find(
  //         (item: IChecklistStateObject) => item._id === _id
  //       );
  //       if (!itemToUpdate) {
  //         return;
  //       }
  //       itemToUpdate.isOptionOpen = !itemToUpdate.isOptionOpen;
  //     })
  //   );
  // },
}));
