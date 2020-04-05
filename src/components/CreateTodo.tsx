import React, { useState } from 'react';
import './componentStyle/CreateTodo.css';

import { useCreateTodoMutation } from '../generated/graphql';
import { TodoCreateButton } from './button/TodoCreateButton';
import { CharacterCount } from './CharacterCount';

interface CreateTodoGqlError {
  message: [
    {
      constraints: {
        length: string;
      };
    }
  ];
}

let todoError: string;

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo, { loading, error }] = useCreateTodoMutation();

  if (error) {
    // GraphQLErrorを取得
    const errorArry = error.graphQLErrors.map(e => e.message);
    const errorObj: CreateTodoGqlError = errorArry[0] as any;
    todoError = errorObj.message[0].constraints.length;
  }

  return (
    <form
      className="todo-form"
      onSubmit={async event => {
        event.preventDefault();

        try {
          await createTodo({
            variables: {
              title: item.title
            }
          });
          setItem({ title: '' });
        } catch {}
      }}
    >
      <div className="todo-form-inner">
        <CharacterCount value={item.title} error={todoError} />
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
