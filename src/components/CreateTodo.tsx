import React, { useState } from 'react';
import { useCreateTodoMutation } from '../generated/graphql';

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo] = useCreateTodoMutation();

  // 値を更新するメソッド
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setItem(prevItem => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  };

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
        onChange={handleChange}
        value={item.title}
      />
      <button className="todo-btn" data-testid="todo-btn-test" type="submit">
        ＋
      </button>
    </form>
  );
};
