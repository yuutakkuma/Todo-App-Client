import React from 'react';

import { Button } from '../../pages/pageStyle/Button.style';

import { Loading } from '../Loading';

interface Props {
  isRegisterLoading: boolean;
}

export const RegisterButton: React.FC<Props> = (props) => {
  if (props.isRegisterLoading) return <Loading />;

  return (
    <Button MarginToHighAndLow={5} type="submit">
      新規登録
    </Button>
  );
};
