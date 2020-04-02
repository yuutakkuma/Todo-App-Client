import React from 'react';
import { useLogOutMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';

export const LogOutButton: React.FC = () => {
  const history = useHistory();
  const [logOut] = useLogOutMutation();

  return (
    <button
      className="logout-btn"
      data-testid="logout-btn-test"
      onClick={async () => {
        await logOut();
        history.push('/');
      }}
    >
      ログアウト
    </button>
  );
};
