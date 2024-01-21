import React from 'react';
import CharacterList from '../../organisms/CharacterList';
import './styles.css';

const HomePage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className={'home-container'}>
        <CharacterList />
      </div>
    </React.Suspense>
  );
};

export default HomePage;
