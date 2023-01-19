import { create } from 'zustand';

interface IAuthState {
  email: string;
  apiKey: string;
  registerErr: string
}

export const useAuthStore = create<IAuthState>()((set) => ({
  email: '',
  apiKey: '',
  registerErr: ''
}));
