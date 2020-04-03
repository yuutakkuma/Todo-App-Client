import React from 'react';
import { useLogOutMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';
import { Loading } from '../Loading';

export const LogOutButton: React.FC = () => {
  const history = useHistory();
  const [logOut, { loading }] = useLogOutMutation();

  if (loading) return <Loading />;

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
