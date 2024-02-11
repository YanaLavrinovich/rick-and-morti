import React, { useMemo } from 'react';
import CardLink from '../../atoms/CardLink';

interface IEpisodeLinkProps {
  episode: string;
}

const EpisodeLink = ({ episode }: IEpisodeLinkProps) => {
  const episodeNumber = useMemo(() => {
    const matched = episode.match(/episode\/\d+/g);
    if (matched === null) {
      return null;
    }

    return matched.at(0)?.split('/').at(1);
  }, [episode]);

  return (
    <CardLink
      href={'/episode/' + episodeNumber}
      title={'Episode - ' + episodeNumber}
    />
  );
};

export default EpisodeLink;
