import React, { useMemo } from 'react';
import CardLink from '../../atoms/CardLink';

interface ICharacterLinkProps {
  character: string;
}

const CharacterLink = ({ character }: ICharacterLinkProps) => {
  const characterId = useMemo(() => {
    const matched = character.match(/character\/\d+/g);
    if (matched === null) {
      return null;
    }

    return matched.at(0)?.split('/').at(1);
  }, [character]);

  return (
    <CardLink
      href={'/character/' + characterId}
      title={'Character - ' + characterId}
    />
  );
};

export default CharacterLink;
