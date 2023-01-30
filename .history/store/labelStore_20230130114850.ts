import { create } from 'zustand';
import produce from 'immer';
import { removeLocalStorage, setLocalStorage } from '../lib/utils/localStorage';

export interface ILabelState {
  labelOptionId: string;
  isCreating: boolean;
  updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => void;
  resetLabelOptionId: () => void;
  toggleLabelCreating: () => void;
}

export const labelStore = create<ILabelState>()((set, get) => ({
  labelOptionId: '',
  isCreating: false,
  updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    set(
      produce((state) => {
        state.labelOptionId = id;
      })
    );
    console.log(id);
    setLocalStorage('labelOptionId', id);
  },
  resetLabelOptionId: () => {
    set(
      produce((state) => {
        state.labelOptionId = '';
      })
    );
    removeLocalStorage('labelOptionId');
  },
  toggleLabelCreating: () => {
    set(
      produce((state) => {
        state.isCreating = !state.isCreating;
      })
    );
  },
}));
