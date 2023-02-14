import { create } from 'zustand';
import produce from 'immer';

interface ICardStore {
  card: ICard[];
  toggleModal: (_id: string) => void;
}

interface ICard {
  _id: string;
  isOpen: boolean;
}

export const cardStore = create<ICardStore>()((set) => ({
  card: [],
  toggleModal: (_id) => {
    set(
      produce((state) => {
        const card = state.card.find((card: ICard) => card._id === _id);
        card.isOpen = !card.isOpen;
      })
    );
  },
}));

// Card id store

interface ICardIdStore {
  idCard?: string;
  updateIdCard: (idCard?: string) => void;
  removeCardId: () => void;
}

export const cardIdStore = create<ICardIdStore>()((set) => ({
  idCard: '',
  updateIdCard: (idCard) => {
    set(
      produce((state) => {
        state.idCard = idCard;
      })
    );
  },
  removeCardId: () => {
    set(
      produce((state) => {
        state.idCard = '';
      })
    );
  },
}));

// Checklist id

interface IChecklistIdStore {
  idChecklist?: string;
  updateIdChecklist: (idChecklist?: string) => void;
  removeIdChecklist: () => void;
}

export const checklistIdStore = create<IChecklistIdStore>()((set) => ({
  idChecklist: '',
  updateIdChecklist: (idChecklist) => {
    set(
      produce((state) => {
        state.idChecklist = idChecklist;
      })
    );
  },
  removeIdChecklist: () => {
    set(
      produce((state) => {
        state.idChecklist = '';
      })
    );
  },
}));

// List id store

interface IListIdStore {
  idList: string;
  updateIdList: (id: string) => void;
  removeIdList: () => void;
}

export const listIdStore = create<IListIdStore>()((set) => ({
  idList: '',
  updateIdList: (id) => {
    set(
      produce((state) => {
        state.id = id;
      })
    );
  },
  removeIdList: () => {
    set(
      produce((state) => {
        state.idList = '';
      })
    );
  },
}));
