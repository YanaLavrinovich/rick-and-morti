import React from 'react';
import './styles.css';
import EpisodeLink from '../../molecules/EpisodeLink';
import { episodeInfoQuery } from '../../../shared/recoil/selectors';
import { useRecoilValue } from 'recoil';
import { Spinner } from '@fluentui/react-components';
import { useParams } from 'react-router-dom';

const EpisodePage = () => {
  const { id = '1' } = useParams();
  const episode = useRecoilValue(episodeInfoQuery(id));
  console.log(episode);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {!!episode ? <EpisodeLink episode={episode.episode} /> : <Spinner />}
    </React.Suspense>
  );
};

export default EpisodePage;
