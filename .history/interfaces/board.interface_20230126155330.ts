export interface IBoard {
  boardName: string;
}

export interface IBoardCardData {
  _id: string;
  cardName: string;
}

export interface IBoardData {
  _id?: string;
  listName: string;
  idBoard?: string;
  cards: [IBoardCardData];
}
