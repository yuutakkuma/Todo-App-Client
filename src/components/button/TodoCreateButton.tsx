import React from 'react';

interface Props {
  isCreateLoading: boolean;
}

export const TodoCreateButton: React.FC<Props> = props => {
  if (props.isCreateLoading) return <div>ロード中...</div>;
  return (
    <button className="todo-btn" type="submit">
      +
    </button>
  );
};
