import { createContext, Dispatch } from 'react';
import { CardState } from '../../interfaces/card';

// context
type CardProps = {
  CardState: CardState;
  openCardChildForm(): void;
  closeCardChildForm(): void;
  openCardOption(): void;
  closeCardOption(): void;
  openCardForm(): void;
  closeCardForm(): void;
};
export const useCardContext = createContext<CardProps>({} as CardProps);
