import { createContext, Dispatch } from 'react';
import { CardState } from '../../../interfaces/card';

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
export const CardContext = createContext<CardProps>({} as CardProps);
