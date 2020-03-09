import React, { useState } from 'react';

import { CreateForm } from './CreateForm';
import { Todo } from '../models/todo.model';
import { List } from './List';

export default {
  title: 'TodoCreate'
};

export const Create = () => {
  const [test, setTest] = useState<Todo[]>([]);

  const todoAddHandler = (title: string) => {
    setTest(prevItems => {
      return [...prevItems, { title: title }];
    });
  };

  const todoDeleteHandler = (id: number) => {
    setTest(prevTodos => {
      return prevTodos.filter((_value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <CreateForm onAdd={todoAddHandler} onTest={() => {}} />
      {test.map((todoItems, index) => {
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
