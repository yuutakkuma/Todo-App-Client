import React from 'react';
import { useHistory } from 'react-router-dom';

import { LogOutBtn } from '../componentStyle/Header.style';

import { useLogOutMutation } from '../../generated/graphql';
import { Loading } from '../Loading';

export const LogOutButton: React.FC = () => {
  const history = useHistory();
  const [logOut, { loading }] = useLogOutMutation();

  if (loading) return <Loading />;

  return (
    <LogOutBtn
      onClick={async () => {
        await logOut();
        history.push('/');
      }}
    >
      ログアウト
    </LogOutBtn>
  );
};
