import React, { useState } from 'react';
import _ from 'lodash';

import './componentStyle/CreateTodo.css';
import { useCreateTodoMutation } from '../generated/graphql';
import { TodoCreateButton } from './button/TodoCreateButton';
import { CharacterCount } from './CharacterCount';
import { CreateTodoGqlError } from '../models/createTodoGqlError';

let todoError: string;
// エラーを表示するトリガー
let reloadTrigger: boolean = false;

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo, { loading, error }] = useCreateTodoMutation();

  if (error) {
    // GraphQLErrorを取得
    const errorObj = _.map(error.graphQLErrors, 'message');
    const errors: CreateTodoGqlError = errorObj[0] as any;
    todoError = errors.message[0].constraints.length;
    // エラーを表示させる
    reloadTrigger = true;
  }

  return (
    <form
      className="todo-form"
      autoComplete="off"
      onSubmit={async event => {
        event.preventDefault();

        try {
          await createTodo({
            variables: {
              title: item.title
            }
          });
          setItem({ title: '' });
          // エラーの表示を消す
          reloadTrigger = false;
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
