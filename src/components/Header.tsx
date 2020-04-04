import React from 'react';
import './componentStyle/Header.css';

import { LogOutButton } from './button/LogOutButton';

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>ToDo アプリ</h1>
      </div>
      <div className="logout-box">
        <LogOutButton />
      </div>
    </header>
  );
};
