import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, RenderResult } from '@testing-library/react';

import { CreateTodo } from '../../components/CreateTodo';

let component: RenderResult;

beforeAll(() => {
  component = render(
    <MockedProvider>
      <CreateTodo />
    </MockedProvider>
  );
});

describe('CreateTodo', () => {
  test('Todo作成Input', () => {
    const createTodoForm = component.getByPlaceholderText('やること');
    fireEvent.change(createTodoForm, {
      target: { value: 'パンを買う' }
    });
    // component.debug();
  });
});
