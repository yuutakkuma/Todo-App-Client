import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import {
  render,
  act,
  fireEvent,
  waitForDomChange
} from '@testing-library/react';
import { CreateTodo } from './CreateTodo';
import { CreateTodoDocument } from '../generated/graphql';

const mocks = [
  {
    request: {
      query: CreateTodoDocument,
      variables: {
        title: 'パンを買う'
      }
    },
    result: {
      data: {
        createTodo: { input: { title: 'パンを買う' } }
      }
    }
  }
];

test('レンダリング', () => {
  act(() => {
    render(
      <MockedProvider>
        <CreateTodo />
      </MockedProvider>
    );
  });
});

test('Todo作成テスト', async () => {
  const { getByPlaceholderText, getByTestId, debug } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodo />
    </MockedProvider>
  );
  const createTodoForm = getByPlaceholderText('やること');
  fireEvent.change(createTodoForm, {
    target: { value: 'パンを買う' }
  });
  debug();
  const todoButton = getByTestId('todo-btn-test');
  fireEvent.click(todoButton);
  await waitForDomChange();
  debug();
});
