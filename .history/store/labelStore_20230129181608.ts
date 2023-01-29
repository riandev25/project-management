import { create } from 'zustand';
import produce from 'immer';

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
    set(
      produce((state) => {
        const id = String(event.currentTarget.dataset.id);
        state.labelOptionId = id;
      })
    );
  },
  resetLabelOptionId: () => {
    set(
      produce((state) => {
        state.labelOptionId = '';
      })
    );
  },
  toggleLabelCreating: () => {
    set(
      produce((state) => {
        state.isCreating = !state.isCreating;
      })
    );
  },
}));
