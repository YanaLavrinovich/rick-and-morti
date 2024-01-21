import { RecoilState, atom } from 'recoil';
import { ICharacter } from '../types';

export const characterListState: RecoilState<ICharacter[]> = atom<ICharacter[]>(
  {
    key: 'CharacterList',
    default: [],
  }
);

export const currentCharacterListPageState: RecoilState<number> = atom({
  key: 'currentCharacterListPage',
  default: 1,
});
