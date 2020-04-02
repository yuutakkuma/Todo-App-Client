import React from 'react';
import { useCreateTodoMutation } from '../generated/graphql';

interface Props {
  todoTitle: string;
}

export const TodoCreateButton: React.FC<Props> = props => {
  const [createTodo] = useCreateTodoMutation();
  return (
    <button
      className="todo-btn"
      onClick={async () => {
        await createTodo({
          variables: {
            title: props.todoTitle
          }
        });
      }}
    >
      +
    </button>
  );
};
