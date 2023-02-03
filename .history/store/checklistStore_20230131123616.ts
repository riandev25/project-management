import { create } from 'zustand';
import produce from 'immer';
import { removeLocalStorage, setLocalStorage } from '../lib/utils/localStorage';

export interface IChecklistState {
  isAddCheckItem: boolean;
  toggleAddCheckItem: () => void;
  // isCreating: boolean;
  // updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // resetLabelOptionId: () => void;
  // toggleLabelCreating: () => void;
}

export const checklistStore = create<IChecklistState>()((set, get) => ({
  isAddCheckItem: false,
  toggleAddCheckItem: () => {
    set(
      produce((state) => {
        state.isAddCheckItem = !state.isAddCheckItem;
      })
    );
  },
  // isCreating: false,
  // updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = String(event.currentTarget.dataset.id);
  //   set(
  //     produce((state) => {
  //       state.labelOptionId = id;
  //     })
  //   );
  //   setLocalStorage('labelOptionId', id);
  // },
  // resetLabelOptionId: () => {
  //   set(
  //     produce((state) => {
  //       state.labelOptionId = '';
  //     })
  //   );
  //   removeLocalStorage('labelOptionId');
  // },
  // toggleLabelCreating: () => {
  //   set(
  //     produce((state) => {
  //       state.isCreating = !state.isCreating;
  //     })
  //   );
  // },
}));
