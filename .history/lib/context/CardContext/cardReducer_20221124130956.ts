import { CardState } from '../../../interfaces/card';

type CardAction =
  // type: string;
  | { type: 'OPEN_ADDCARDCHILD' }
  | { type: 'CLOSE_ADDCARDCHILD' }
  | { type: 'OPEN_CARD_OPTION' }
  | { type: 'CLOSE_CARD_OPTION' }
  | { type: 'OPEN_CARD_FORM' }
  | { type: 'CLOSE_CARD_FORM' };

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

    case 'OPEN_CARD_FORM':
      return { ...state, isCardFormOpen: true };

    case 'CLOSE_CARD_FORM':
      return { ...state, isCardFormOpen: false };

    default:
      return { ...state };
  }
};

export default cardReducer;
