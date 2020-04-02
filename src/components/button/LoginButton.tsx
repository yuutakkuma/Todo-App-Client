import React from 'react';

interface Props {
  isLoginLoading: boolean;
}

export const LoginButton: React.FC<Props> = props => {
  if (props.isLoginLoading) return <div>ロード中...</div>;
  return (
    <button className="auth-btn" type="submit">
      ログイン
    </button>
  );
};
