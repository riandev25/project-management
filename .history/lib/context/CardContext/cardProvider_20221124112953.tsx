import { useReducer } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import cardReducer from './cardReducer';
import { CardState } from '../../../interfaces/card';

interface props {
  children: JSX.Element | JSX.Element[];
}

const cardProvider = ({ children }: props) => {
  // initial state
  const initialState: CardState = {
    isFormOpen: false,
    isOptionOpen: false,
  };

  const [CardState, dispatch] = useReducer(cardReducer, initialState);

  // open add card child form
  const openCardChildForm = () => {
    dispatch({
      type: 'OPEN_ADDCARDCHILD',
    });
  };

  // close add card child form
  const closeCardChildForm = () => {
    dispatch({
      type: 'CLOSE_ADDCARDCHILD',
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

export default cardProvider;
