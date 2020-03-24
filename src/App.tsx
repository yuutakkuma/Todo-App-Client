import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';

import { Header } from './components/Header';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token/', {
      method: 'POST',
      credentials: 'include'
    }).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};
