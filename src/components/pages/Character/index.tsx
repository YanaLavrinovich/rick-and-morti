import React from 'react';
import Avatar from '../../molecules/AvatarCard';
import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { Spinner } from '@fluentui/react-components';
import { characterInfoQuery } from '../../../shared/recoil/selectors';

const CharacterPage = () => {
  const { id = '1' } = useParams();
  const character = useRecoilValueLoadable(characterInfoQuery(id));
  return (
    <React.Suspense fallback={<Spinner />}>
      {character.state === 'hasValue' ? (
        <Avatar item={character.contents} />
      ) : (
        <Spinner />
      )}
    </React.Suspense>
  );
};

export default CharacterPage;
