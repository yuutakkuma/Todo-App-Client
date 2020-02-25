import React, { useState } from 'react';

import { Header } from './Header';
import { CreateForm } from './CreateForm';
import { List } from './List';
import { Todo } from '../models/todo.model';

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (title: string) => {
    setTodos(prevItems => {
      return [...prevItems, { title: title }];
    });
  };

  const todoDeleteHandler = (id: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter((_value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateForm onAdd={todoAddHandler} />
      {todos.map((todoItems, index) => {
        return (
          <List
            key={index}
            id={index}
            title={todoItems.title}
            onDelete={todoDeleteHandler}
          />
        );
      })}
    </div>
  );
};
