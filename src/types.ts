export interface CardTheme {
  id: string;
  title: string;
}

export const CARD_THEMES = [
  {
    id: "countries",
    title: "Countries",
  },
  {
    id: "heroes",
    title: "Heroes",
  },
];

export interface GameSettings {
  cardTheme: CardTheme;
  numberOfCards: number;
}

export interface ImageCardState {
  imageId: number;
  isFlipped: boolean;
}
