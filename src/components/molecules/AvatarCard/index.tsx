import {
  Body1Stronger,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
} from '@fluentui/react-components';
import React from 'react';
import './styles.css';
import EpisodeList from '../EpisodeList';
import { ICharacter } from '../../../shared/types';
import AvatarImage from '../AvatarImage';

const useStyles = makeStyles({
  card: {
    minWidth: '30%',
  },
});

interface IAvatarCardProps {
  item: ICharacter;
}

const AvatarCard = ({ item }: IAvatarCardProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <AvatarImage avatarId={item.id} src={item.image} alt={item.name} />
        }
        header={
          <Body1Stronger>
            <b>{item.name}</b>
          </Body1Stronger>
        }
        description={<Caption1>{item.gender}</Caption1>}
      />
      <CardPreview children={<EpisodeList items={item.episode} />} />
    </Card>
  );
};

export default AvatarCard;
