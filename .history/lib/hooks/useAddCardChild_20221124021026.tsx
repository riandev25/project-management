import { useReducer, createContext } from 'react';
import { CardOptionsState } from '../../interfaces/card';

// actions
const OPEN_CARD_OPTIONS = 'OPEN_CARD_OPTIONS';
const CLOSE_CARD_OPTIONS = 'CLOSE_CARD_OPTIONS';

// reducers
type CardOptionsAction =
  | { type: 'OPEN_CARD_OPTIONS' }
  | { type: 'CLOSE_CARD_OPTIONS' };

const reducer = (state: CardOptionsState, action: CardOptionsAction) => {
  if (action.type === OPEN_CARD_OPTIONS) {
    return { ...state, isOpen: true };
  }

  if (action.type === CLOSE_CARD_OPTIONS) {
    return { ...state, isOpen: false };
  }

  return { ...state };
};

// context
type CardOptionsProp = {
  CardOptionsState: CardOptionsState;
  openCardOptions(): void;
  closeCardOptions(): void;
};
export const useAddCardChildContext = createContext<CardOptionsProp>(
  {} as CardOptionsProp
);

// provider
interface props {
  children: JSX.Element | JSX.Element[];
}

export const AddCardChildProvider = ({ children }: props) => {
  // initial state
  const initialState: CardOptionsState = {
    isOpen: false,
  };

  const [CardOptionsState, dispatch] = useReducer(reducer, initialState);

  // open add card child form
  const openCardOptions = () => {
    dispatch({
      type: OPEN_CARD_OPTIONS,
    });
  };

  // close add card child form
  const closeCardOptions = () => {
    dispatch({
      type: CLOSE_CARD_OPTIONS,
    });
  };

  return (
    <useAddCardChildContext.Provider
      value={{ CardOptionsState, openCardOptions, closeCardOptions }}
    >
      {children}
    </useAddCardChildContext.Provider>
  );
};
