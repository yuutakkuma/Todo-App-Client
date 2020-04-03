import React, { useState } from 'react';
import { useCreateTodoMutation } from '../generated/graphql';
import { TodoCreateButton } from './button/TodoCreateButton';

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo, { loading }] = useCreateTodoMutation();

  return (
    <form
      className="todo-form"
      onSubmit={async event => {
        event.preventDefault();
        await createTodo({
          variables: {
            title: item.title
          }
        });
        setItem({ title: '' });
      }}
    >
      <input
        className="todo-input"
        name="title"
        placeholder="やること"
        value={item.title}
        onChange={event => {
          setItem({
            title: event.target.value
          });
        }}
      />
      <TodoCreateButton isCreateLoading={loading} />
    </form>
  );
};
