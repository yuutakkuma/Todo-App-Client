import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { TodoListItem } from '../../components/TodoListItem';

const todoItem = {
  title: 'ケーキ買う'
};

describe('TodoListItem', () => {
  test('TodoListItemを取得', () => {
    const component = render(
      <MockedProvider>
        <TodoListItem title={todoItem.title} isTodoListItemLoading={false} />
      </MockedProvider>
    );
    // component.debug();
    component.getByText('ケーキ買う');
  });

  test('ロード中', () => {
    const nowLoadingComponent = render(
      <MockedProvider>
        <TodoListItem title={''} isTodoListItemLoading={true} />
      </MockedProvider>
    );

    nowLoadingComponent.findByRole('svg');
  });
});
