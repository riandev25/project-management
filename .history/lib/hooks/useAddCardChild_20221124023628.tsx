import { useReducer, createContext } from 'react';
import { AddCardChildState, CardState } from '../../interfaces/card';

// actions
const OPEN_ADDCARDCHILD = 'OPEN_ADDCARDCHILD';
const CLOSE_ADDCARDCHILD = 'CLOSE_ADDCARDCHILD';

// reducers
type AddCardChildAction =
  | { type: 'OPEN_ADDCARDCHILD' }
  | { type: 'CLOSE_ADDCARDCHILD' };

const reducer = (state: AddCardChildState, action: AddCardChildAction) => {
  if (action.type === OPEN_ADDCARDCHILD) {
    return { ...state, isOpen: true };
  }

  if (action.type === CLOSE_ADDCARDCHILD) {
    return { ...state, isOpen: false };
  }

  return { ...state };
};

// context
type AddCardChildProps = {
  AddCardChildState: AddCardChildState;
  openCardChildForm(): void;
  closeCardChildForm(): void;
};
export const useAddCardChildContext = createContext<AddCardChildProps>(
  {} as AddCardChildProps
);

// provider
interface props {
  children: JSX.Element | JSX.Element[];
}

export const AddCardChildProvider = ({ children }: props) => {
  // initial state
  const initialState: AddCardChildState = {
    isOpen: false,
  };

  const [AddCardChildState, dispatch] = useReducer(reducer, initialState);

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

  return (
    <useAddCardChildContext.Provider
      value={{ AddCardChildState, openCardChildForm, closeCardChildForm }}
    >
      {children}
    </useAddCardChildContext.Provider>
  );
};
