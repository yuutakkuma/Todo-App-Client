import React from 'react';
import './componentStyle/Header.css';

import { LogOutButton } from './button/LogOutButton';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const history = useHistory();
  return (
    <header>
      <div className="header-container">
        <div className="header-inner">
          <h1>ToDo アプリ</h1>
        </div>
        <div className="header-btn-box">
          <div className="header-btn-container">
            <button
              className="deleteaccount-move-btn"
              type="button"
              onClick={() => history.push('/')}
            >
              アカウント削除
            </button>
            <LogOutButton />
          </div>
        </div>
      </div>
    </header>
  );
};
