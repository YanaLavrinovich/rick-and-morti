import React from 'react';
import { Link } from '@fluentui/react-components';

interface ICardLinkProps {
  href: string;
  title: string;
}

const CardLink = ({ href, title }: ICardLinkProps) => {
  return <Link href={href}>{title}</Link>;
};

export default CardLink;
