import React from 'react';
import EpisodeLink from '../EpisodeLink';
import { makeStyles } from '@fluentui/react-components';

interface IEpisodeListProps {
  items: string[];
}

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const EpisodeList = ({ items }: IEpisodeListProps) => {
  const styles = useStyles();

  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <EpisodeLink key={index} episode={item} />
      ))}
    </ul>
  );
};

export default EpisodeList;
