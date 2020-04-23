import React from 'react';

import { LoginBtn } from '../componentStyle/Login.style';

import { Loading } from '../Loading';

interface Props {
  isLoginLoading: boolean;
}

export const LoginButton: React.FC<Props> = (props) => {
  if (props.isLoginLoading) return <Loading />;
  return <LoginBtn type="submit">ログイン</LoginBtn>;
};
