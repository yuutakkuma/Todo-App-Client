import React, { useState } from 'react';
import './componentStyle/CreateTodo.css';

import { useCreateTodoMutation } from '../generated/graphql';
import { TodoCreateButton } from './button/TodoCreateButton';
import { CharacterCount } from './CharacterCount';
import { CreateTodoGqlError } from '../models/createTodoGqlError';

let todoError: string;
// エラーを表示するトリガー
let reloadTrigger: boolean;

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo, { loading, error }] = useCreateTodoMutation();

  if (error) {
    // GraphQLErrorを取得
    const errorObj = error.graphQLErrors.map(e => e.message);
    const errors: CreateTodoGqlError = errorObj[0] as any;
    todoError = errors.message[0].constraints.length;
    // トリガーをfalseにする
    reloadTrigger = false;
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
          // トリガーをtrueにする
          reloadTrigger = true;
        } catch {}
      }}
    >
      <div className="todo-form-inner">
        <CharacterCount
          value={item.title}
          error={todoError}
          reload={reloadTrigger}
        />
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
