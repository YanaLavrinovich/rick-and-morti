import React from 'react';
import CharacterLink from '../CharacterLink';
import { makeStyles } from '@fluentui/react-components';

interface ICharacterLinkProps {
  characters: string[];
}

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CharacterLinkList = ({ characters }: ICharacterLinkProps) => {
  const styles = useStyles();
  return (
    <div>
      <ul className={styles.list}>
        {characters.map((character, index) => (
          <CharacterLink key={index} character={character} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterLinkList;
