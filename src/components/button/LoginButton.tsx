import React from 'react';
import { Loading } from '../Loading';

interface Props {
  isLoginLoading: boolean;
}

export const LoginButton: React.FC<Props> = props => {
  if (props.isLoginLoading) return <Loading />;
  return (
    <button className="auth-btn" type="submit">
      ログイン
    </button>
  );
};
