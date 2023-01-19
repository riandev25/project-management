import { create } from 'zustand';

interface IAuthState {
  apiKey: string;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  apiKey: '',
}));
