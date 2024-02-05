import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../components/pages/Home';
import EpisodePage from '../../components/pages/Episode';
import CharacterPage from '../../components/pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/episode/:id',
    element: <EpisodePage />,
  },
  {
    path: '/character/:id',
    element: <CharacterPage />,
  },
]);

export default router;
