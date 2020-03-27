import React from 'react';
import {
  render,
  waitForDomChange,
  fireEvent,
  act,
  wait
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { TodoApp } from './TodoApp';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { GetTodoListDocument, CreateTodoDocument } from '../generated/graphql';

const mocks = [
  {
    request: {
      query: GetTodoListDocument,
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
      query: CreateTodoDocument,
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
    const { debug, getByPlaceholderText, getByText, getByTestId } = render(
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
    await wait(async () => fireEvent.click(todoButton));
    debug();
    // エラーになる (なんでエラーになるんだろ。。。)
    getByText('Error...');
    debug();
    await waitForDomChange();
  });
});
