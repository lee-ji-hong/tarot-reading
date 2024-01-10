import { atom } from 'recoil';
import { TarotData } from '@models/tarotData';

export const LuckData = atom<TarotData>({
  key: 'LuckData',
  default: JSON.parse(localStorage.getItem('LuckData') || 'null') || {
    title: '',
    Interpretation: '',
    cards: [],
  },
});
