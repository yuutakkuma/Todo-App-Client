import React from 'react';
import { Login } from '../components/Login';
import { useHistory } from 'react-router-dom';

export const Landing: React.FC = () => {
  const history = useHistory();
  return (
    <div className="main">
      <div className="main-container">
        <div className="box">
          <h1 className="main-text">ToDoアプリケーションへようこそ！！！</h1>
          <p className="main-text">
            ログイン、又は新規登録でアプリケーションを使用出来ます
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="box">
          <Login />
          <div className="box-inner">
            <p className="main-text">又は</p>
            <button
              className="move-btn"
              type="button"
              onClick={() => history.push('/register')}
            >
              新規登録
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
