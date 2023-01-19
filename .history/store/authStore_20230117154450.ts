import { create } from 'zustand';

interface IAuthState {
  email: string;
  apiKey: string;
  registerErr: string;
  registerErrStatus: string;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  email: '',
  apiKey: '',
  registerErr: '',
  showRegisterErr: (val: string) => set((state) => ({ registerErr: val })),
  registerErrStatus: 'success',
}));
