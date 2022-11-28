import { CardState } from '../../../interfaces/card';

type CardAction =
  // type: string;
  | { type: 'OPEN_ADDCARDCHILD' }
  | { type: 'CLOSE_ADDCARDCHILD' }
  | { type: 'OPEN_CARD_OPTION' }
  | { type: 'CLOSE_CARD_OPTION' };

const cardReducer = (state: CardState, action: CardAction): CardState => {
  switch (action.type) {
    case 'OPEN_ADDCARDCHILD':
      return { ...state, isFormOpen: true };

    case 'CLOSE_ADDCARDCHILD':
      return { ...state, isFormOpen: false };

    case 'OPEN_CARD_OPTION':
      return { ...state, isOptionOpen: true };

    case 'CLOSE_CARD_OPTION':
      return { ...state, isOptionOpen: false };

    default:
      return { ...state };
  }
};

export default cardReducer;
