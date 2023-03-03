import { ILabel } from './label.interface';

export interface IBoardCardData {
  _id?: string;
  idList?: string;
  cardName?: string;
  listName?: string;
  labels?: ILabel[];
}

export interface IBoardData {
  _id?: string;
  listName: string;
  idBoard?: string;
  cards: [IBoardCardData];
  labels?: ILabel[];
}
