import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import { GetTodoListQuery } from '../../graphql/generated'
import { TodoList } from '../../components/TodoList'

const title = {
  one: 'パンを買う',
  two: 'ヨーグルト美味しい',
  three: '筋トレする'
}

const data: GetTodoListQuery = {
  getTodoList: [
    {
      id: '1',
      userId: '1',
      title: title.one,
      __typename: 'Todo'
    },
    {
      id: '2',
      userId: '2',
      title: title.two,
      __typename: 'Todo'
    },
    {
      id: '3',
      userId: '3',
      title: title.three,
      __typename: 'Todo'
    }
  ]
}

describe('TodoList', () => {
  test('TodoListを表示', () => {
    const component = render(
      <MockedProvider>
        <TodoList
          fetchData={data}
          isTodoListLoading={false}
          error={undefined}
        />
      </MockedProvider>
    )
    component.getByText(title.one)
    component.getByText(title.two)
    component.getByText(title.three)
  })

  test('ロード中', () => {
    const isLoadingComponent = render(
      <MockedProvider>
        <TodoList fetchData={data} isTodoListLoading={true} error={undefined} />
      </MockedProvider>
    )
    // isLoadingComponent.debug();
    isLoadingComponent.findByRole('svg')
  })

  test('データが無い', () => {
    const noDataComponent = render(
      <MockedProvider>
        <TodoList
          fetchData={undefined}
          isTodoListLoading={false}
          error={undefined}
        />
      </MockedProvider>
    )

    // notDataComponent.debug();
    noDataComponent.getByText('やることを追加しよう！')
  })
})
