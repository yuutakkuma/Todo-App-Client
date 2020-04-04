import React from 'react';

import { TodoList } from '../src/components/TodoList';
import { GetTodoListQuery } from '../src/generated/graphql';
import { ApolloError } from 'apollo-boost';

export default {
  component: TodoList,
  title: 'TodoList'
};

const data: GetTodoListQuery = {
  getTodoList: [
    {
      id: '1',
      userId: '1',
      title: 'パンを買う',
      __typename: 'Todo'
    },
    {
      id: '2',
      userId: '2',
      title: 'ヨーグル美味しい',
      __typename: 'Todo'
    },
    {
      id: '3',
      userId: '3',
      title: '筋トレする',
      __typename: 'Todo'
    }
  ]
};

const notTodoListError: ApolloError | undefined = undefined;

const todoListError: ApolloError | undefined = {
  message: '',
  graphQLErrors: [],
  networkError: null,
  extraInfo: '',
  name: ''
};

const notLoading: boolean = false;

export const ListShowing = () => {
  return (
    <TodoList
      fetchData={data}
      isTodoListLoading={notLoading}
      error={notTodoListError}
    />
  );
};
