import { CardAction, CardState } from '../../../interfaces/card';

const cardReducer = (state: CardState, action: CardAction): CardState => {
  switch (action.type) {
    case 'OPEN_ADDCARDCHILD':
      console.log('open');
      return { ...state, isFormOpen: true };

    case 'CLOSE_ADDCARDCHILD':
      console.log('close');
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
