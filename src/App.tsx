import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';
import { Loading } from './components/Loading';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 'http://localhost:4000/refresh_token/'
    fetch('https://blooming-atoll-62832.herokuapp.com/refresh_token/', {
      method: 'POST',
      credentials: 'include'
    }).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Routes />
    </div>
  );
};
