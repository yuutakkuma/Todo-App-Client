import React from 'react';

interface Props {
  isRegisterLoading: boolean;
}

export const RegisterButton: React.FC<Props> = props => {
  if (props.isRegisterLoading) return <div>Loading...</div>;

  return (
    <button className="auth-btn" type="submit">
      新規登録
    </button>
  );
};
