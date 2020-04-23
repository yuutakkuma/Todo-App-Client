import React from 'react';

import { TodoName } from './componentStyle/TodoList.style';

import { Loading } from './Loading';

interface Props {
  title: string;
  isTodoListItemLoading: boolean;
}

export const TodoListItem: React.FC<Props> = (props) => {
  if (props.isTodoListItemLoading) return <Loading />;
  return <TodoName>{props.title}</TodoName>;
};
