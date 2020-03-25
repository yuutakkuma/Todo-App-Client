import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetTodoListQuery } from '../generated/graphql';

import { CreateForm } from '../components/CreateForm';
import { List } from '../components/List';
import { getLogOutStatus } from '../logOutStatus';
import { LogOutButton } from '../components/LogOutButton';

export const TodoApp: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });

  let logoutStatus: boolean = getLogOutStatus();
  if (logoutStatus === true) {
    history.push('/Login');
  }

  if (typeof data === 'undefined') {
    return <div>データを取得出来ませんでした。</div>;
  }

  if (!data.getTodoList) {
    return <div>データを取得出来ませんでした。</div>;
  }

  if (loading) {
    return <div>データをロード中</div>;
  }

  if (error) {
    return <div>再度ログインしてください。</div>;
  }
  // リストが無い時のメッセージ
  const massage = () => {
    if (data.getTodoList?.length === 0) {
      return <div className="massage">やることを追加しよう！</div>;
    }
  };

  return (
    <div>
      <LogOutButton />
      <CreateForm />
      {massage()}
      {data.getTodoList.map(x => {
        // map出来なかった場合
        if (!x) {
          return <div>error...</div>;
        }
        return <List key={x.id} id={x.id} title={x.title} />;
      })}
    </div>
  );
};
