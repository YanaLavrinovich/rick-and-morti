import React, { useMemo } from 'react';
import { Link } from '@fluentui/react-components';

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
    <li>
      <Link href={'/episode/' + episodeNumber}>
        {'Episode - ' + episodeNumber}
      </Link>
    </li>
  );
};

export default EpisodeLink;
