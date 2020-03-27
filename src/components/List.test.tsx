import React from 'react';
import {
  act,
  render,
  waitForElement,
  createEvent,
  fireEvent,
  waitForDomChange,
  wait
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { List } from './List';
import { gql } from 'apollo-boost';

let todo: any;

todo = [
  {
    id: '1',
    title: 'パンを食べる'
  },
  {
    id: '2',
    title: '洗濯物を干す'
  },
  {
    id: '3',
    title: '洗い物をする'
  }
];

const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

const mocks = [
  {
    request: {
      query: DELETE_TODO_MUTATION,
      variables: {
        id: ['1', '2', '3']
      }
    },
    result: {
      data: {
        deleteTodo: { id: '1' }
      }
    }
  }
];

test('レンダリング', async () => {
  act(() => {
    render(
      <MockedProvider>
        <List id={'1'} title={'テスト'} />
      </MockedProvider>
    );
  });
});

test('Todoリストを表示して削除ボタンを起動する', async () => {
  const { getByText, getByTestId, debug } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <List
        id={
          await todo.map((x: { id: string }) => {
            return x.id;
          })
        }
        title={
          await todo.map((x: { title: string }) => {
            {
              return x.title;
            }
          })
        }
      />
    </MockedProvider>
  );
  // 全て表示されてることを確かめる
  await waitForElement(async () => {
    getByText('パンを食べる' + '洗濯物を干す' + '洗い物をする');
  });
  // 削除ボタン起動
  const deleteButton = getByTestId('delete-btn-test');
  createEvent.click(deleteButton);
  debug();
});
