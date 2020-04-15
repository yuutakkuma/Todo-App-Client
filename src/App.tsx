import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';
import { Loading } from './components/Loading';

let refreshTokenUrl: string;

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  // 開発環境用　レフレッシュトークンURL
  if (process.env.NODE_ENV === 'development') {
    refreshTokenUrl = process.env.REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL!;
  }
  // 本番環境用　レフレッシュトークンURL
  if (process.env.NODE_ENV === 'production') {
    refreshTokenUrl = process.env.REACT_APP_PRODUCTION_REFRESH_TOKEN_URL!;
  }

  useEffect(() => {
    fetch(refreshTokenUrl, {
      method: 'POST',
      credentials: 'include',
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
