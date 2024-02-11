import React from 'react';
import AvatarCard from '../AvatarCard';
import './styles.css';
import { ICharacter } from '../../../shared/types';

interface IAvatarListProps {
  items: ICharacter[];
}

const AvatarList = ({ items }: IAvatarListProps) => {
  return (
    <div className="avatar-list">
      {!!items && items.map((item) => <AvatarCard key={item.id} item={item} />)}
    </div>
  );
};

export default AvatarList;
