import React from 'react';
import { GetTodoListQuery } from '../generated/graphql';
import { ApolloError } from 'apollo-boost';
import { TodoDeleteButton } from './button/TodoDeleteButton';
import { TodoListItem } from './TodoListItem';

interface Props {
  fetchData: GetTodoListQuery | undefined;
  isTodoListLoading: boolean;
  error: ApolloError | undefined;
}

export const TodoList: React.FC<Props> = props => {
  if (
    typeof props.fetchData === 'undefined' ||
    !props.fetchData.getTodoList ||
    props.fetchData.getTodoList.length === 0
  ) {
    return <div className="massage">やることを追加しよう！</div>;
  }

  if (props.error) return <div>ToDoリストを受信出来ませんでした。</div>;

  return (
    <div className="todolist-wrapper">
      {props.fetchData.getTodoList.map(x => {
        if (!x) return <div>Error...</div>;
        return (
          <div className="todolist-container" key={x.id}>
            <TodoListItem
              title={x.title}
              isTodoListItemLoading={props.isTodoListLoading}
            />
            <TodoDeleteButton todoId={x.id} />
          </div>
        );
      })}
    </div>
  );
};
