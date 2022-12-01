import { useReducer } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import cardReducer from './cardReducer';
import { CardState } from '../../../interfaces/card';

interface props {
  children: JSX.Element | JSX.Element[];
}

const CardProvider = ({ children }: props) => {
  // initial state
  const initialState: CardState = {
    isFormOpen: false,
    isOptionOpen: false,
    isCardFormOpen: false,
  };

  const [CardState, dispatch] = useReducer(cardReducer, initialState);

  // // open add card child form
  const openCardChildForm = (event: {
    currentTarget: { dataset: { id: string } };
  }) => {
    console.log(event.currentTarget.dataset.id);
    if (!CardState.isOptionOpen) {
      dispatch({
        type: 'TOGGLE_CHILD_FORM',
      });
    }
  };

  // close add card child form
  const closeCardChildForm = () => {
    dispatch({
      type: 'CLOSE_ADDCARDCHILD',
    });
  };

  // open card option
  const openCardOption = () => {
    if (!CardState.isFormOpen) {
      dispatch({
        type: 'OPEN_CARD_OPTION',
      });
    }
  };

  // close card option
  const closeCardOption = () => {
    dispatch({
      type: 'CLOSE_CARD_OPTION',
    });
  };

  // open card form
  const openCardForm = () => {
    dispatch({
      type: 'OPEN_CARD_FORM',
    });
  };

  // close card form
  const closeCardForm = () => {
    dispatch({
      type: 'CLOSE_CARD_FORM',
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
        openCardForm,
        closeCardForm,
      }}
    >
      {children}
    </useCardContext.Provider>
  );
};

export default CardProvider;
