import React, { useState } from 'react';
import { TodoCreateButton } from './TodoCreateButton';

export const CreateTodo: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
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
    <form className="todo-form">
      <input
        className="todo-input"
        name="title"
        placeholder="やること"
        onChange={handleChange}
        value={item.title}
      />
      <TodoCreateButton todoTitle={item.title} />
    </form>
  );
};
