import {
  Body1,
  Body1Stronger,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
} from '@fluentui/react-components';
import React from 'react';
import { IEpisode } from '../../../shared/types';
import CharacterLinkList from '../CharacterLinkList';

const useStyles = makeStyles({
  card: {
    minWidth: '30%',
  },
  preview: {
    display: 'flex',
  },
});

interface IEpisodeCardProps {
  episode: IEpisode;
}

const EpisodeCard = ({ episode }: IEpisodeCardProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <p>
            <Body1Stronger>{episode.name}</Body1Stronger> -{' '}
            <Body1>{episode.episode}</Body1>
          </p>
        }
        description={<Caption1>{episode.air_date}</Caption1>}
      />
      <CardPreview
        className={styles.preview}
        children={<CharacterLinkList characters={episode.characters} />}
      />
    </Card>
  );
};

export default EpisodeCard;
