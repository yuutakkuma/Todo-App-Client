import React from 'react';

import { CreateForm } from '../components/CreateForm';
import { List } from '../components/List';
import {
  useGetTodoListQuery,
  useDeleteTodoMutation
} from '../generated/graphql';

export const TodoApp: React.FC = () => {
  const { data, loading } = useGetTodoListQuery({ pollInterval: 500 });
  const [deleteTodo] = useDeleteTodoMutation();

  // 削除するメソッド
  const todoDeleteHandler = (id: string | undefined) => {
    // idが存在しない場合はエラー
    if (!id) {
      return <div>error...</div>;
    }
    deleteTodo({
      variables: {
        id: id
      }
    });
  };

  // Todoリストを表示するメソッド
  const todoList = () => {
    // データが無い、又はロード中の場合
    if (!data || loading) {
      return <div>loading...</div>;
    }
    // データを取得出来なかった場合
    if (!data.getTodoList) {
      return <div>データを取得出来ませんでした。</div>;
    }

    const todoList = data.getTodoList.map(x => {
      // map出来なかった場合
      if (!x) {
        return <div>error...</div>;
      }
      return (
        <List
          key={x.id}
          id={x.id}
          title={x.title}
          onDelete={todoDeleteHandler}
        />
      );
    });
    return todoList;
  };

  return (
    <div>
      <CreateForm />
      {todoList()}
    </div>
  );
};
