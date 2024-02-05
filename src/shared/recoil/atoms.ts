import { RecoilState, atom } from 'recoil';
import { ICharacter, IEpisode } from '../types';

export const characterListState: RecoilState<ICharacter[]> = atom<ICharacter[]>(
  {
    key: 'CharacterList',
    default: [],
  }
);

export const currentCharacterListPageState: RecoilState<number> = atom({
  key: 'CurrentCharacterListPage',
  default: 1,
});

export const episodeInfoState: RecoilState<IEpisode | null> =
  atom<IEpisode | null>({
    key: 'EpisodeInfo',
    default: null,
  });

export const characterInfoState: RecoilState<ICharacter | null> =
  atom<ICharacter | null>({
    key: 'CharacterInfo',
    default: null,
  });
