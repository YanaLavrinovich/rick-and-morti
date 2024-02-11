import React from 'react';
import EpisodeLink from '../EpisodeLink';
import { makeStyles } from '@fluentui/react-components';

interface IEpisodeListProps {
  items: string[];
}

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const EpisodeList = ({ items }: IEpisodeListProps) => {
  const styles = useStyles();

  return (
    <div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <EpisodeLink key={index} episode={item} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
