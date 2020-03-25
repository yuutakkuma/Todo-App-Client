import React from 'react';
import { useLogOutMutation, useMeQuery } from '../generated/graphql';
import { setLogOutStatus } from '../logOutStatus';

export const LogOutButton: React.FC = () => {
  const [logOut] = useLogOutMutation();
  const { data } = useMeQuery({ pollInterval: 500 });

  if (typeof data === 'undefined') {
    return <div>再度ログインしてください。</div>;
  }

  return (
    <button
      className="logout-btn"
      onClick={async () => {
        await logOut();

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
