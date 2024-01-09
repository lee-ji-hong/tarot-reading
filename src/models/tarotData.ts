export interface TarotData {
  title: string;
  Interpretation: string;
  cards: TarotCard[];
}

export interface TarotCard {
  cardNumber: number;
  cardName: string;
  cardImageUrl: string;
  cardMeaning: string;
}

