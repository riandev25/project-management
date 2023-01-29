import { create } from 'zustand';
import produce from 'immer';
import {
  faUser,
  faClock,
  faImage,
  faCopy,
  faEye,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faTag,
  faListCheck,
  faPaperclip,
  faArrowRight,
  faShare,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export interface IFeatureComponent {
  _id: string;
  icon: IconDefinition;
  name: string;
  isOpen: boolean;
}

interface IFeatureStore {
  featureState: IFeatureComponent[];
  // updateModalState: (payload: IBoardComponent[]) => void;
  toggleFeatureModal: (_id: string) => void;
}

export const featureStore = create<IFeatureStore>()((set, get) => ({
  featureState: [
    {
      _id: 'members-option',
      icon: faUser,
      name: 'Members',
      isOpen: false,
    },
    {
      _id: 'labels-option',
      icon: faTag,
      name: 'Labels',
      isOpen: false,
    },
    {
      _id: 'checklist-option',
      icon: faListCheck,
      name: 'Checklist',
      isOpen: false,
    },
    {
      _id: 'dates-option',
      icon: faClock,
      name: 'Dates',
      isOpen: false,
    },
    {
      _id: 'attachment-option',
      icon: faPaperclip,
      name: 'Attachment',
      isOpen: false,
    },
    {
      _id: 'cover-option',
      icon: faImage,
      name: 'Cover',
      isOpen: false,
    },
  ],
  toggleFeatureModal: (_id: string) => {
    set(
      produce((state) => {
        const itemToUpdate = state.featureState.find(
          (item: IFeatureComponent) => item._id === _id
        );
        if (!itemToUpdate) {
          return;
        }
        itemToUpdate.isOpen = !itemToUpdate.isOpen;
      })
    );
  },
}));
