import React from 'react';
import Avatar from '../Avatar';
import './styles.css';
import { ICharacter } from '../../../shared/types';

interface IAvatarListProps {
  items: ICharacter[];
}

const AvatarList = ({ items }: IAvatarListProps) => {
  return (
    <div className="avatar-list">
      {!!items && items.map((item) => <Avatar key={item.id} item={item} />)}
    </div>
  );
};

export default AvatarList;
