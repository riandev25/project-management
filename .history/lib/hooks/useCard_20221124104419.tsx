import { useReducer, createContext } from 'react';
import { CardState } from '../../interfaces/card';

// actions
const OPEN_ADDCARDCHILD = 'OPEN_ADDCARDCHILD';
const CLOSE_ADDCARDCHILD = 'CLOSE_ADDCARDCHILD';

// reducers
type AddCardChildAction = {
  type: string;
};
// | { type: 'OPEN_ADDCARDCHILD' }
// | { type: 'CLOSE_ADDCARDCHILD' };

const reducer = (state: CardState, action: AddCardChildAction) => {
  // if (action.type === OPEN_ADDCARDCHILD) {
  //   return { ...state, isFormOpen: true };
  // }

  // if (action.type === CLOSE_ADDCARDCHILD) {
  //   return { ...state, isFormOpen: false };
  // }

  // return { ...state };

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

// context
type CardProps = {
  CardState: CardState;
  openCardChildForm(): void;
  closeCardChildForm(): void;
  openCardOption(): void;
  closeCardOption(): void;
};
export const useCardContext = createContext<CardProps>({} as CardProps);

// provider
interface props {
  children: JSX.Element | JSX.Element[];
}

export const AddCardChildProvider = ({ children }: props) => {
  // initial state
  const initialState: CardState = {
    isFormOpen: false,
    isOptionOpen: false,
  };

  const [CardState, dispatch] = useReducer(reducer, initialState);

  // open add card child form
  const openCardChildForm = () => {
    dispatch({
      type: OPEN_ADDCARDCHILD,
    });
  };

  // close add card child form
  const closeCardChildForm = () => {
    dispatch({
      type: CLOSE_ADDCARDCHILD,
    });
  };

  // open card option
  const openCardOption = () => {
    dispatch({
      type: 'OPEN_CARD_OPTION',
    });
  };

  // close card option
  const closeCardOption = () => {
    dispatch({
      type: 'CLOSE_CARD_OPTION',
    });
  };

  return (
    <useCardContext.Provider
      value={{
        CardState,
        openCardChildForm,
        closeCardChildForm,
        openCardOption,
        closeCardOption,
      }}
    >
      {children}
    </useCardContext.Provider>
  );
};
