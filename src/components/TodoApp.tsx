import React, { useState } from 'react';

import { Header } from './Header';
import { CreateForm } from './CreateForm';
import { List } from './List';
import { Todo } from '../models/todo.model';
import { useGetTodoListQuery, GetTodoListQuery } from '../generated/graphql';

export const TodoApp: React.FC = () => {
  const { data, loading } = useGetTodoListQuery({ pollInterval: 500 });
  const [todos, setTodos] = useState<Todo[]>([]);

  if (!data || loading) {
    return <div>loading...</div>;
  }

  const todoAddHandler = (title: string) => {
    setTodos(prevItems => {
      return [...prevItems, { title: title }];
    });
  };

  const todoDeleteHandler = (id: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter((_value: any, index: number) => {
        return index !== id;
      });
    });
  };

  const todoList = () => {
    const todos = data.getTodoList?.map(x => {
      return (
        <List
          key={x?.id}
          id={x?.id}
          title={x?.title}
          onDelete={todoDeleteHandler}
        />
      );
    });
    return todos;
  };

  return (
    <div>
      <Header />
      <CreateForm onAdd={todoAddHandler} onTest={todoList} />
      {todoList()}
    </div>
  );
};
