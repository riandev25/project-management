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

interface IAuthLoginStore {
  email: string;
  apiKey: string;
  loginErr: string;
  loginErrStatus: boolean;
  updateEmail: (val: string) => void;
  updateApiKey: (val:string) => void
  updateLoginErr: (val: string) => void;
  updateLoginErrStatus: () => void;
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

export const useAuthLoginStore = create<IAuthLoginStore>()((set) => ({
  email: '',
  apiKey: '',
  loginErr: '',
  loginErrStatus: false,
  updateEmail: (val: string) => {
    set(() => ({ email: val }));
  },
  updateApiKey: (val: string) => {
    set(() => ({ apiKey: val }));
  },
  updateLoginErr: (val: string) => {
    set(() => ({ loginErr: val }));
  },
  updateLoginErrStatus: () => {
    set((state) => ({ loginErrStatus: !state.loginErrStatus }));
  },
}));
