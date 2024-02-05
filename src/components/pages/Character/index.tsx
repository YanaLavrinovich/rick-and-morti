import React from 'react';
import './styles.css';
import Avatar from '../../molecules/Avatar';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Spinner } from '@fluentui/react-components';
import { characterInfoQuery } from '../../../shared/recoil/selectors';

const CharacterPage = () => {
  const { id = '1' } = useParams();
  const character = useRecoilValue(characterInfoQuery(id));
  return (
    <React.Suspense fallback={<Spinner />}>
      {!!character ? <Avatar item={character} /> : <Spinner />}
    </React.Suspense>
  );
};

export default CharacterPage;
