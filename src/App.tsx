import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './shared/routers';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
