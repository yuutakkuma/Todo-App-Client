import React, { useState } from 'react';
import './componentStyle/CreateTodo.css';

import { useCreateTodoMutation } from '../generated/graphql';
import { TodoCreateButton } from './button/TodoCreateButton';
import { CharacterCount } from './CharacterCount';

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
      <div className="todo-form-inner">
        <CharacterCount value={item.title} />
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
      </div>
      <TodoCreateButton isCreateLoading={loading} />
    </form>
  );
};
