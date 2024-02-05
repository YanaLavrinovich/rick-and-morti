export interface ICharacter {
  id: number;
  name: string;
  image: string;
  gender: string;
  episode: string[];
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}
