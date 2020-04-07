import React from 'react';
import { TodoListItem } from '../src/components/TodoListItem';

export default {
  component: TodoListItem,
  title: 'TodoListItem'
};

export const nowLoading = () => {
  return <TodoListItem isTodoListItemLoading={true} title={'テスト'} />;
};
