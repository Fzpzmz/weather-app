import { ICard } from '../card/card.interface';

export interface ICardListProps {
  cards: ICard[];
}

export interface ICardListState {
  isLoading: boolean;
  error: string | null;
}