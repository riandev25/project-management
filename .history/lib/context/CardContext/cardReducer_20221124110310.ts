import { CardState } from '../../../interfaces/card';

type CardAction = {
  type: string;
};
// | { type: 'OPEN_ADDCARDCHILD' }
// | { type: 'CLOSE_ADDCARDCHILD' };

const reducer = (state: CardState, action: CardAction) => {
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

export default reducer;
