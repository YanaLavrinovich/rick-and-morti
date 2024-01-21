import React from 'react';
import './styles.css';
import { Link } from '@fluentui/react-components';

interface IEpisodeCardProps {
  episode: string;
}

const EpisodeCard = ({ episode }: IEpisodeCardProps) => {
  return (
    <ul className="episode-card">
      <Link href={episode} target="_blank">
        {parseEpisodeNumber(episode)}
      </Link>
    </ul>
  );
};

const parseEpisodeNumber = (episode: string) => {
  const matched = episode.match(/episode\/\d+/g);
  if (matched === null) {
    return null;
  }

  return matched.at(0)?.split('/').at(1);
};

export default EpisodeCard;
