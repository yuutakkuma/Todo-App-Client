import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetTodoListQuery } from '../generated/graphql';

import { CreateTodo } from '../components/CreateTodo';
import { getLogOutStatus } from '../logOutStatus';
import { TodoList } from '../components/TodoList';
import { Header } from '../components/Header';

export const TodoApp: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });

  let logoutStatus: boolean = getLogOutStatus();
  if (logoutStatus === true) {
    history.push('/Login');
  }

  return (
    <div className="main">
      <Header />
      <CreateTodo />
      <TodoList fetchData={data} loading={loading} error={error} />
    </div>
  );
};
