export interface IBoard {
  boardName: string;
}

export interface IBoardCardData {
  _id?: string;
  idList?: string;
  cardName?: string;
  listName?: string;
}

export interface IBoardData {
  _id?: string;
  listName: string;
  idBoard?: string;
  cards: [IBoardCardData];
}
