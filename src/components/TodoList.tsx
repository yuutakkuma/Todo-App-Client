import React from 'react';
import { GetTodoListQuery } from '../generated/graphql';
import { ApolloError } from 'apollo-boost';
import { TodoDeleteButton } from './TodoDeleteButton';

interface Props {
  fetchData: GetTodoListQuery | undefined;
  loading: boolean;
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

  return (
    <div className="todolist-wrapper">
      {props.fetchData.getTodoList.map(x => {
        if (!x) return <div>Error...</div>;
        return (
          <div className="todolist-container" key={x.id}>
            <p className="todo-name">{x.title}</p>
            <TodoDeleteButton todoId={x.id} />
          </div>
        );
      })}
    </div>
  );
};
