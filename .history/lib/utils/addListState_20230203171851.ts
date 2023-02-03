import { IBoardData } from '../../interfaces/board.interface';

export const addListState = (lists: IBoardData[]) => {
  return lists.map(({ _id }) => ({
    ...{ _id },
    isAddCardOpen: false,
    isOptionOpen: false,
  }));
};
