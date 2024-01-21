import React from 'react';
import './styles.css';
import EpisodeCard from '../EpisodeCard';
import './styles.css';

interface IEpisodeListProps {
  items: string[];
}

const EpisodeList = ({ items }: IEpisodeListProps) => {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <EpisodeCard key={index} episode={item} />
      ))}
    </React.Fragment>
  );
};

export default EpisodeList;
