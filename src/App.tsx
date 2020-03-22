import React from 'react';
import { Routes } from './Routes';

import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};
