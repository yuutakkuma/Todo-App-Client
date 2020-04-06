import React from 'react';
import { Loading } from '../Loading';

interface Props {
  isDeleteAccountLoading: boolean;
}

export const DeleteAccountButton: React.FC<Props> = props => {
  if (props.isDeleteAccountLoading) return <Loading />;

  return (
    <button className="delete-account-btn" type="submit">
      アカウントを削除する
    </button>
  );
};
