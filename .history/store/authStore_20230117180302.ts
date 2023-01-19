import { create } from 'zustand';

interface IAuthStore {
  email: string;
  apiKey: string;
  registerErr: string;
  registerErrStatus: boolean;
  updateEmail: (val: string) => void;
  updateRegisterErr: (val: string) => void;
  updateRegisterErrStatus: () => void;
}

export const useAuthStore = create<IAuthStore>()((set) => ({
  email: '',
  apiKey: '',
  registerErr: 'A',
  registerErrStatus: false,
  updateEmail: (val: string) => {
    set(() => ({ email: val }));
  },
  updateRegisterErr: (val: string) => {
    set(() => ({ registerErr: val }));
  },
  updateRegisterErrStatus: () => {
    set((state) => ({ registerErrStatus: !state.registerErrStatus }));
  },
}));
