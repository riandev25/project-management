import { create } from 'zustand';

interface IAuthState {
  apiKey: string;
}

const useBearStore = create<IAuthState>()((set) => ({
  apiKey: '',
}));
