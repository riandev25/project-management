// import { create } from 'zustand';
// import produce from 'immer';

// interface ICard {
//   _id: string;
//   isOpen: boolean;
// }

// export const cardStore = create<ICardStore>()((set) => ({
//   card: [],
//   toggleModal: (_id) => {
//     set(
//       produce((state) => {
//         const card = state.card.find((card: ICard) => card._id === _id);
//         card.isOpen = !card.isOpen;
//       })
//     );
//   },
// }));
