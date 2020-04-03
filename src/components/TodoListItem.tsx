import React from 'react';
import { Loading } from './Loading';

interface Props {
  title: string;
  isTodoListItemLoading: boolean;
}

export const TodoListItem: React.FC<Props> = props => {
  if (props.isTodoListItemLoading) return <Loading />;
  return <p className="todo-name">{props.title}</p>;
};
