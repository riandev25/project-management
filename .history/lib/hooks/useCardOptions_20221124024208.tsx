import { useReducer, createContext } from 'react';
import { CardState } from '../../interfaces/card';

// actions
const OPEN_OPTIONS = 'OPEN_OPTIONS';
const CLOSE_OPTIONS = 'CLOSE_OPTIONS';

// reducers
type CardOptionsState = { type: 'OPEN_OPTIONS' } | { type: 'CLOSE_OPTIONS' };

const reducer = (state: CardState, action: CardOptionsState) => {
  if (action.type === OPEN_OPTIONS) {
    return { ...state, isOpen: true };
  }

  if (action.type === CLOSE_OPTIONS) {
    return { ...state, isOpen: false };
  }

  return { ...state };
};

// context
type CardOptionsProps = {
  CardState: CardState;
  openCardOptions(): void;
  closeCardOptions(): void;
};
export const useCardOptionsContext = createContext<CardOptionsProps>(
  {} as CardOptionsProps
);

// provider
interface props {
  children: JSX.Element | JSX.Element[];
}

export const CardOptionsProvider = ({ children }: props) => {
  // initial state
  const initialState: CardState = {
    isOpen: false,
  };

  const [CardState, dispatch] = useReducer(reducer, initialState);

  // open add card child form
  const openCardOptions = () => {
    dispatch({
      type: OPEN_OPTIONS,
    });
  };

  // close add card child form
  const closeCardOptions = () => {
    dispatch({
      type: CLOSE_OPTIONS,
    });
  };

  return (
    <useCardOptionsContext.Provider
      value={{ CardState, openCardOptions, closeCardOptions }}
    >
      {children}
    </useCardOptionsContext.Provider>
  );
};
