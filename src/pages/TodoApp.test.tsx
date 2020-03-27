import React from 'react';
import {
  render,
  waitForDomChange,
  fireEvent,
  act
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { TodoApp } from './TodoApp';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { gql } from 'apollo-boost';

const GET_TODOLIST_QUERY = gql`
  query GetTodoList {
    getTodoList {
      id
      userId
      title
    }
  }
`;

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($title: String!) {
    createTodo(input: { title: $title })
  }
`;

const mocks = [
  {
    request: {
      query: GET_TODOLIST_QUERY,
      variables: {
        id: '1',
        userId: '1',
        title: 'たこ焼き買う'
      }
    },
    result: {
      data: [{ id: '1', userId: '1', title: 'たこ焼き買う' }]
    }
  },
  {
    request: {
      query: CREATE_TODO_MUTATION,
      variables: {
        title: 'たこ焼き買う'
      }
    },
    result: {
      data: {
        createTodo: [{ input: { title: 'たこ焼き買う' } }]
      }
    }
  }
];

test('レンダリング', async () => {
  await act(async () => {
    const { debug, getByPlaceholderText, getByTestId, getByText } = render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <Switch>
            <Route component={TodoApp} />
          </Switch>
        </BrowserRouter>
      </MockedProvider>
    );
    // ロード中
    getByText('データをロード中...');
    debug();
    await waitForDomChange();
    const createTodoForm = getByPlaceholderText('やること');
    fireEvent.change(createTodoForm, {
      target: { value: 'たこ焼き買う' }
    });
    const todoButton = getByTestId('todo-btn-test');
    fireEvent.click(todoButton);
    debug();
    // エラーになる
    getByText('Error...');
    debug();
    await waitForDomChange();
  });
});
