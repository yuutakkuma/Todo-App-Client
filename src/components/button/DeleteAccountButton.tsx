import React from 'react';

import { Button } from '../../pages/pageStyle/Button.style';

import { Loading } from '../Loading';

interface Props {
  isDeleteAccountLoading: boolean;
}

export const DeleteAccountButton: React.FC<Props> = (props) => {
  if (props.isDeleteAccountLoading) return <Loading />;

  return (
    <Button MarginToHighAndLow={5} type="submit">
      アカウントを削除する
    </Button>
  );
};
