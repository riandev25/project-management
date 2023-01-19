import { create } from 'zustand';

interface IAuthState {
  email: string;
  apiKey: string;
  registerErr: string;
  registerErrStatus: boolean;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  email: '',
  apiKey: '',
  registerErr: '',
  registerErrStatus: false,
}));
