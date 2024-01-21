import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentCharacterListState } from '../../../shared/recoil/selectors';
import AvatarList from '../../molecules/AvatarList';

const CharacterList = () => {
  const characterList = useRecoilValue(currentCharacterListState);

  return <AvatarList items={characterList} />;
};

export default CharacterList;
