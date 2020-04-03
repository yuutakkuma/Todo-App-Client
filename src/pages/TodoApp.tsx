import React from 'react';
import { useGetTodoListQuery } from '../generated/graphql';

import { CreateTodo } from '../components/CreateTodo';
import { TodoList } from '../components/TodoList';
import { Header } from '../components/Header';

export const TodoApp: React.FC = () => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });
  if (error) {
    return <div>エラーです</div>;
  }

  return (
    <div>
      <Header />
      <CreateTodo />
      <TodoList fetchData={data} loading={loading} error={error} />
    </div>
  );
};
