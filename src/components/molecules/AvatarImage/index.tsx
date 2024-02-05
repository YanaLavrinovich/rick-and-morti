import React from 'react';
import { Link } from '@fluentui/react-components';
import './styles.css';

interface IAvatarImageProps {
  avatarId: number;
  src: string;
  alt: string;
}

const AvatarImage = ({ avatarId, src, alt }: IAvatarImageProps) => {
  return (
    <Link href={'/character/' + avatarId}>
      <img className={'avatar-img'} src={src} alt={alt} />
    </Link>
  );
};

export default AvatarImage;
