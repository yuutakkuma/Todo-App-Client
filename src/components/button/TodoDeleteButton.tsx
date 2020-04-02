import React from 'react';
import { useDeleteTodoMutation } from '../../generated/graphql';

interface Props {
  todoId: string;
}

export const TodoDeleteButton: React.FC<Props> = props => {
  const [todoDelete, { loading, error }] = useDeleteTodoMutation();

  if (error) {
    return <div>削除出来ませんでした。</div>;
  }
  if (loading) return <div>ロード中...</div>;

  return (
    <button
      className="delete-btn"
      type="button"
      onClick={async () => {
        await todoDelete({
          variables: {
            id: props.todoId
          }
        });
      }}
    >
      DELETE
    </button>
  );
};
