import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetTodoListQuery } from '../generated/graphql';

import { CreateTodo } from '../components/CreateTodo';
import { List } from '../components/List';
import { getLogOutStatus } from '../logOutStatus';
import { LogOutButton } from '../components/LogOutButton';

export const TodoApp: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });

  let logoutStatus: boolean = getLogOutStatus();
  if (logoutStatus === true) {
    history.push('/Login');
  }

  const todoList = () => {
    if (loading) return <div>データをロード中...</div>;
    if (typeof data === 'undefined' || error) return <div>Error...</div>;
    if (!data.getTodoList || data.getTodoList.length === 0) {
      return <div className="massage">やることを追加しよう！</div>;
    }
    // TodoListを表示する
    return data.getTodoList.map(x => {
      if (!x) return <div>Error...</div>;

      return <List key={x.id} id={x.id} title={x.title} />;
    });
  };

  return (
    <div>
      <LogOutButton />
      <CreateTodo />
      {todoList()}
    </div>
  );
};
