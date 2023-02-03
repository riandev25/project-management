import { IBoardData } from '../../interfaces/board.interface';
import { IListState } from '../../store/listStore';

export const addListState = (lists: IBoardData[]): IListState[] => {
  return lists.map(({ _id }) => ({
    ...{ _id },
    isAddCardOpen: false,
    isOptionOpen: false,
  }));
};
