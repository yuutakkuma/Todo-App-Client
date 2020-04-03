import React from 'react';
import { Loading } from '../Loading';

interface Props {
  isCreateLoading: boolean;
}

export const TodoCreateButton: React.FC<Props> = props => {
  if (props.isCreateLoading) return <Loading />;
  return (
    <button className="todo-btn" type="submit">
      +
    </button>
  );
};
