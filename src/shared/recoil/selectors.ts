import { selector, selectorFamily } from 'recoil';
import { currentCharacterListPageState } from './atoms';

export const characterListQuery = selectorFamily({
  key: 'characterListQuery',
  get: (page: number) => async () => {
    const queryParams = new URLSearchParams({
      page: String(page),
    });
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?${queryParams}`
    );

    return response.json();
  },
});

export const currentCharacterListState = selector({
  key: 'CurrentCharacterList',
  get: ({ get }) =>
    get(characterListQuery(get(currentCharacterListPageState))).results,
});

export const episodeInfoQuery = selectorFamily({
  key: 'EpisodeInfoQuery',
  get: (id: string) => async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );

    return response.json();
  },
});

export const characterInfoQuery = selectorFamily({
  key: 'CharacterInfoQuery',
  get: (id: string) => async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return response.json();
  },
});
