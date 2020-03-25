import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetTodoListQuery, useLogOutMutation } from '../generated/graphql';

import { CreateForm } from '../components/CreateForm';
import { List } from '../components/List';

export const TodoApp: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 });
  const [logOut] = useLogOutMutation();

  if (typeof data === 'undefined') {
    return <div>やることを追加しよう！</div>;
  }

  if (loading) {
    return <div>データをロード中</div>;
  }

  if (error) {
    return <div>再度ログインしてください。</div>;
  }

  // データを取得出来なかった場合
  if (!data.getTodoList) {
    return <div>データを取得出来ませんでした。</div>;
  }

  return (
    <div>
      <button
        className="logout-btn"
        onClick={async () => {
          const logout = await logOut();
          if (logout) {
            history.push('/Login');
          }
        }}
      >
        ログアウト
      </button>
      <CreateForm />
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
