// Card child form
export type CardAction =
  | { type: 'OPEN_ADDCARDCHILD' }
  | { type: 'CLOSE_ADDCARDCHILD' }
  | { type: 'OPEN_CARD_OPTION' }
  | { type: 'CLOSE_CARD_OPTION' }
  | { type: 'OPEN_CARD_FORM' }
  | { type: 'CLOSE_CARD_FORM' };

export interface CardState {
  isFormOpen: boolean;
  isOptionOpen: boolean;
  isCardFormOpen: boolean;
}
