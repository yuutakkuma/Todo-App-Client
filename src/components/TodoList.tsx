import React from 'react'
import { ApolloError } from '@apollo/client'
import _ from 'lodash'

import {
  Message,
  TodoListWrapper,
  TodoListContainer
} from './componentStyle/TodoList.style'

import { GetTodoListQuery } from '../graphql/generated/graphql'
import { TodoDeleteButton } from './button/TodoDeleteButton'
import { TodoListItem } from './TodoListItem'

interface Props {
  fetchData: GetTodoListQuery | undefined
  isTodoListLoading: boolean
  error: ApolloError | undefined
}

export const TodoList: React.FC<Props> = props => {
  if (
    typeof props.fetchData === 'undefined' ||
    !props.fetchData.getTodoList ||
    props.fetchData.getTodoList.length === 0
  ) {
    return <Message>やることを追加しよう！</Message>
  }

  if (props.error) return <div>ToDoリストを受信出来ませんでした。</div>

  return (
    <TodoListWrapper>
      {_.map(_.orderBy(props.fetchData.getTodoList, 'id', 'desc'), x => {
        if (!x) return <div>Error...</div>
        return (
          <TodoListContainer key={x.id}>
            <TodoListItem
              title={x.title}
              isTodoListItemLoading={props.isTodoListLoading}
            />
            <TodoDeleteButton todoId={x.id} />
          </TodoListContainer>
        )
      })}
    </TodoListWrapper>
  )
}
