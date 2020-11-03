import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'

import {
  GetTodoListQuery,
  GetTodoListQueryVariables,
  GetTodoListDocument,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  CreateTodoDocument,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoDocument
} from '../graphql/generated'

import Header from '../components/common/Header'
import TaskInput from '../components/home/TaskInput'
import TaskList from '../components/home/TaskList'

import { StyledHomeMain } from './styles/home'

const HomePage: FC = () => {
  const [task, setTask] = useState<string>('')
  const { push, replace } = useHistory()

  const {
    data: taskData,
    loading: taskLoading,
    error: getTaskError,
    refetch: taskRefetch
  } = useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument)
  const [
    addTask,
    { loading: addTaskLoading, error: addTaskLoadingError }
  ] = useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument
  )
  const [
    deleteTask,
    { loading: deleteTaskLoading, error: deleteTaskError }
  ] = useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument
  )

  return (
    <>
      <Header
        onAccountDeleteClick={() => {}}
        onLogoutClick={() => {
          localStorage.setItem('token', '')
          replace('/')
        }}
      />
      <StyledHomeMain>
        <TaskInput
          inputValue={task}
          onChange={event => setTask(event.target.value)}
          onClick={async () => {
            await addTask({
              variables: {
                title: task
              }
            }).then(() => {
              taskRefetch()
              setTask('')
            })
          }}
          disabled={addTaskLoading}
        />
        {taskData && taskData.getTodoList ? (
          <TaskList
            tasks={taskData.getTodoList.map(tasks => ({
              id: Number(tasks!.id),
              task: tasks!.title
            }))}
            disabled={deleteTaskLoading}
            onClick={id =>
              deleteTask({ variables: { id: String(id) } }).then(() =>
                taskRefetch()
              )
            }
          />
        ) : (
          <div>まだデータがないよ</div>
        )}
      </StyledHomeMain>
    </>
  )
}

export default HomePage
