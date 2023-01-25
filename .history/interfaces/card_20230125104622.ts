// Card child form
export type CardAction =
  | { type: 'OPEN_CHILD_FORM' }
  | { type: 'CLOSE_CHILD_FORM' }
  | { type: 'OPEN_CARD_OPTION' }
  | { type: 'CLOSE_CARD_OPTION' }
  | { type: 'OPEN_CARD_FORM' }
  | { type: 'CLOSE_CARD_FORM' };

export interface CardState {
  isFormOpen: boolean;
  isOptionOpen: boolean;
  isCardFormOpen: boolean;
}

// Updated

// export interface ICreateCard {
//   cardName: string
// }
