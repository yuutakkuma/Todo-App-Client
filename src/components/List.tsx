import React from 'react';
import { useDeleteTodoMutation } from '../generated/graphql';

interface Props {
  id: string;
  title: string;
}

export const List: React.FC<Props> = props => {
  const [deleteTodo, { error }] = useDeleteTodoMutation();

  if (error) {
    return <div>削除出来ませんでした。</div>;
  }

  return (
    <div className="item-list">
      <p className="item-name">{props.title}</p>
      <button
        className="delete-btn"
        data-testid="delete-btn-test"
        onClick={() => {
          deleteTodo({
            variables: {
              id: props.id
            }
          });
        }}
      >
        DELETE
      </button>
    </div>
  );
};
