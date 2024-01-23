import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../components/pages/Home';
import EpisodePage from '../../components/pages/Episode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/episode/:id',
    element: <EpisodePage />,
  },
]);

export default router;
