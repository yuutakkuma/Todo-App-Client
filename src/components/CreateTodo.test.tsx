import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';
import {
  render,
  act,
  fireEvent,
  waitForDomChange
} from '@testing-library/react';
import { CreateTodo } from './CreateTodo';

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($title: String!) {
    createTodo(input: { title: $title })
  }
`;

const mocks = [
  {
    request: {
      query: CREATE_TODO_MUTATION,
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
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodo />
    </MockedProvider>
  );
  const createTodoForm = component.getByPlaceholderText('やること');
  fireEvent.change(createTodoForm, {
    target: { value: 'パンを買う' }
  });
  component.debug();
  const todoButton = component.getByTestId('todo-btn-test');
  fireEvent.click(todoButton);
  await waitForDomChange();
  component.debug();
});
