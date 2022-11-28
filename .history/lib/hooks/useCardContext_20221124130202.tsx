import { useReducer, createContext } from 'react';
import { CardState } from '../../interfaces/card';
import cardReducer from '../context/CardContext/cardReducer';

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

// // provider
// interface props {
//   children: JSX.Element | JSX.Element[];
// }

// export const CardProvider = ({ children }: props) => {
//   // initial state
//   const initialState: CardState = {
//     isFormOpen: false,
//     isOptionOpen: false,
//   };

//   const [CardState, dispatch] = useReducer(cardReducer, initialState);

//   // open add card child form
//   const openCardChildForm = () => {
//     dispatch({
//       type: 'OPEN_ADDCARDCHILD',
//     });
//   };

//   // close add card child form
//   const closeCardChildForm = () => {
//     dispatch({
//       type: 'CLOSE_ADDCARDCHILD',
//     });
//   };

//   // open card option
//   const openCardOption = () => {
//     dispatch({
//       type: 'OPEN_CARD_OPTION',
//     });
//   };

//   // close card option
//   const closeCardOption = () => {
//     dispatch({
//       type: 'CLOSE_CARD_OPTION',
//     });
//   };

//   return (
//     <useCardContext.Provider
//       value={{
//         CardState,
//         openCardChildForm,
//         closeCardChildForm,
//         openCardOption,
//         closeCardOption,
//       }}
//     >
//       {children}
//     </useCardContext.Provider>
//   );
// };
