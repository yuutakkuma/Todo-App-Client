import React from 'react';
import { LogOutButton } from './LogOutButton';

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>ToDo アプリ</h1>
      </div>
      <LogOutButton />
    </header>
  );
};
