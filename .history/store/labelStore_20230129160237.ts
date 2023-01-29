import { create } from 'zustand';
import produce from 'immer';

export interface ILabelState {
  labelOptionId: string;
  updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const featureStore = create<ILabelState>()((set, get) => ({
  labelOptionId: '',
  updateLabelOptionId: (event: React.MouseEvent<HTMLButtonElement>) => {
    set(
      produce((state) => {
        const id = String(event.currentTarget.dataset.id);
        state.labelOptionId = id;
      })
    );
  },
}));
