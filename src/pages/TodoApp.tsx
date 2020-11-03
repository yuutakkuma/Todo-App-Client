import React from 'react'
import { useQuery } from '@apollo/client'
import {
  GetTodoListQuery,
  GetTodoListDocument,
  MeQuery,
  MeDocument
} from '../graphql/generated'

import { CreateTodo } from '../components/CreateTodo'
import { TodoList } from '../components/TodoList'
import { Header } from '../components/Header'
import { HelloUser } from '../components/HelloUser'

export const TodoApp: React.FC = () => {
  const { data, loading, error } = useQuery<GetTodoListQuery>(
    GetTodoListDocument,
    { pollInterval: 500 }
  )
  const meData = useQuery<MeQuery>(MeDocument)

  return (
    <div>
      <Header />
      <HelloUser
        fetchData={meData.data}
        isMeDataLoading={meData.loading}
        error={meData.error}
      />
      <CreateTodo />
      <TodoList fetchData={data} isTodoListLoading={loading} error={error} />
    </div>
  )
}
