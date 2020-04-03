import React from 'react';
import { Loading } from '../Loading';

interface Props {
  isRegisterLoading: boolean;
}

export const RegisterButton: React.FC<Props> = props => {
  if (props.isRegisterLoading) return <Loading />;

  return (
    <button className="auth-btn" type="submit">
      新規登録
    </button>
  );
};
