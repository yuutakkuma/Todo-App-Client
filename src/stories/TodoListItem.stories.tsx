import React from 'react';

import { TodoListItem } from '../components/TodoListItem';

export default {
  component: TodoListItem,
  title: 'TodoListItem',
};

export const CreateListItem = () => {
  return <TodoListItem isTodoListItemLoading={false} title={'テスト'} />;
};

export const NowLoading = () => {
  return <TodoListItem isTodoListItemLoading={true} title={''} />;
};
