import React from 'react';

import { TodoBtn } from '../componentStyle/CreateTodo.style';

import { Loading } from '../Loading';

interface Props {
  isCreateLoading: boolean;
}

export const TodoCreateButton: React.FC<Props> = (props) => {
  if (props.isCreateLoading) return <Loading />;
  return <TodoBtn type="submit">+</TodoBtn>;
};
