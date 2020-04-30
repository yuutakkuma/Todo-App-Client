import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloError } from 'apollo-boost';

import { GetTodoListQuery } from '../generated/graphql';
import { TodoList } from '../components/TodoList';

export default {
  components: TodoList,
  title: 'TodoList',
};

const title = {
  one: 'パンを買う',
  two: 'ヨーグルト美味しい',
  three: '筋トレする',
};

const task: GetTodoListQuery = {
  getTodoList: [
    {
      id: '1',
      userId: '1',
      title: title.one,
      __typename: 'Todo',
    },
    {
      id: '2',
      userId: '2',
      title: title.two,
      __typename: 'Todo',
    },
    {
      id: '3',
      userId: '3',
      title: title.three,
      __typename: 'Todo',
    },
  ],
};

const apolloError: ApolloError = {
  message: '',
  graphQLErrors: [],
  networkError: null,
  extraInfo: [],
  name: '',
};

export const List = () => {
  return (
    <MockedProvider>
      <TodoList fetchData={task} isTodoListLoading={false} error={undefined} />
    </MockedProvider>
  );
};

export const ShowMessage = () => {
  return (
    <MockedProvider>
      <TodoList
        fetchData={undefined}
        isTodoListLoading={true}
        error={undefined}
      />
    </MockedProvider>
  );
};

export const ErrorMessage = () => {
  return (
    <MockedProvider>
      <TodoList
        fetchData={task}
        isTodoListLoading={false}
        error={apolloError}
      />
    </MockedProvider>
  );
};
