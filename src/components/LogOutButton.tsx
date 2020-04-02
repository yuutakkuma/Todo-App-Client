import React from 'react';
import { useLogOutMutation, useMeQuery } from '../generated/graphql';
import { setLogOutStatus } from '../logOutStatus';

export const LogOutButton: React.FC = () => {
  const [logOut] = useLogOutMutation();
  const { data } = useMeQuery({ pollInterval: 500 });

  return (
    <button
      className="logout-btn"
      data-testid="logout-btn-test"
      onClick={async () => {
        await logOut();

        if (typeof data === 'undefined') {
          return <div>再度ログインしてください。</div>;
        }
        if (!data.me) {
          return <div>再度ログインしてください。</div>;
        }
        setLogOutStatus(data.me.loginStatus);
      }}
    >
      ログアウト
    </button>
  );
};
