export interface IBoard {
  boardName: string;
}

export interface IBoardCardData {
  idCard: string;
  cardName?: string;
}

export interface IBoardData {
  _id?: string;
  listName: string;
  idBoard?: string;
  cards: [IBoardCardData];
}
