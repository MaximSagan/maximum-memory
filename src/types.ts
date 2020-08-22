export interface CardTheme {
  id: string;
  title: string;
}

export interface GameSettings {
  cardTheme: CardTheme;
  numberOfCards: number;
}

export interface GameCardStatus {
  displayIndex: number;
  imageId: number;
  isFaceUp: boolean;
  isActive: boolean;
  isMatched: boolean;
}
