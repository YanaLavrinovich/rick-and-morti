import React from 'react';
import { episodeInfoQuery } from '../../../shared/recoil/selectors';
import { useRecoilValueLoadable } from 'recoil';
import { Spinner } from '@fluentui/react-components';
import { useParams } from 'react-router-dom';
import EpisodeCard from '../../molecules/EpisodeCard';

const EpisodePage = () => {
  const { id = '1' } = useParams();
  const episode = useRecoilValueLoadable(episodeInfoQuery(id));
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {episode.state === 'hasValue' ? (
        <EpisodeCard episode={episode.contents} />
      ) : (
        <Spinner />
      )}
    </React.Suspense>
  );
};

export default EpisodePage;
