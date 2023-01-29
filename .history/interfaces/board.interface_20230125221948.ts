export interface IBoard {
  boardName: string;
}

export interface IBoardData {
  _id: string;
  listName: string;
  idBoard: string;
  cards: [
    {
      _id: string;
      cardName: string;
    }
  ];
}
