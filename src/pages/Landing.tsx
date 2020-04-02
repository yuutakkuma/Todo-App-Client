import React from 'react';
import { Login } from './Login';

export const Landing: React.FC = () => {
  return (
    <div className="main">
      <div>
        <h2>Todoアプリケーションへようこそ！！！</h2>
        <p>ログイン、又は新規登録でアプリケーションを使用出来ます</p>
      </div>
      <Login />
    </div>
  );
};
