import React from 'react'
import { useGetTodoListQuery, useMeQuery } from '../generated/graphql'

import { CreateTodo } from '../components/CreateTodo'
import { TodoList } from '../components/TodoList'
import { Header } from '../components/Header'
import { HelloUser } from '../components/HelloUser'

export const TodoApp: React.FC = () => {
  const { data, loading, error } = useGetTodoListQuery({ pollInterval: 500 })
  const meData = useMeQuery({ pollInterval: 500 })

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
