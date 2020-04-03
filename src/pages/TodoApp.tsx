import React from 'react';
import { useGetTodoListQuery } from '../generated/graphql';

import { CreateTodo } from '../components/CreateTodo';
import { TodoList } from '../components/TodoList';
import { Header } from '../components/Header';

export const TodoApp: React.FC = () => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });

  return (
    <div>
      <Header />
      <CreateTodo />
      <TodoList fetchData={data} isTodoListLoading={loading} error={error} />
    </div>
  );
};
