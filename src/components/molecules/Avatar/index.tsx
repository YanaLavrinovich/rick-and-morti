import {
  Body1,
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

const useStyles = makeStyles({
  card: {
    minWidth: '30%',
  },
  preview: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

interface IAvatarProps {
  item: ICharacter;
}

const Avatar = ({ item }: IAvatarProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img className={'avatar-img'} src={item.image} alt={item.name} />
        }
        header={
          <Body1>
            <b>{item.name}</b>
          </Body1>
        }
        description={<Caption1>{item.gender}</Caption1>}
      />
      <CardPreview className={styles.preview}>
        <EpisodeList items={item.episode} />
      </CardPreview>
    </Card>
  );
};

export default Avatar;
