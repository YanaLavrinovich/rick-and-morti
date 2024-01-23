import React from 'react';
import './styles.css';

const EpisodePage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>Hello</div>
    </React.Suspense>
  );
};

export default EpisodePage;
