import React, { FC, useEffect, useState } from 'react'
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

import Portal from '../components/common/Portal'
import Header from '../components/common/Header'
import TaskInput from '../components/home/TaskInput'
import TaskList from '../components/home/TaskList'
import CharacterCounter from '../components/home/CharacterCounter'

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
    { loading: addTaskLoading, error: addTaskError }
  ] = useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument
  )
  const [
    deleteTask,
    { loading: deleteTaskLoading, error: deleteTaskError }
  ] = useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument
  )

  useEffect(() => {
    taskRefetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header
        onAccountDeleteClick={() => push('deleteAccount')}
        onLogoutClick={() => {
          localStorage.setItem('token', '')
          replace('/')
        }}
      />
      <StyledHomeMain>
        <CharacterCounter
          characterCounts={task.length}
          error={addTaskError && '1文字以上、25文字以下になります。'}
        />
        <TaskInput
          inputValue={task}
          onChange={event => setTask(event.target.value)}
          onClick={async () => {
            await addTask({
              variables: {
                title: task
              }
            })
              .then(() => {
                taskRefetch()
                setTask('')
              })
              .catch(() => console.error('Add Task Error'))
          }}
          disabled={addTaskLoading}
        />
        {taskData && taskData.getTodoList && taskData.getTodoList.length > 1 ? (
          <TaskList
            tasks={taskData.getTodoList.map(tasks => ({
              id: Number(tasks!.id),
              task: tasks!.title
            }))}
            disabled={deleteTaskLoading}
            isLoading={taskLoading}
            onClick={id =>
              deleteTask({ variables: { id: String(id) } })
                .then(() => taskRefetch())
                .catch(() => console.error('Delete Task Error'))
            }
          />
        ) : (
          <div>まだデータがないよ</div>
        )}
        {getTaskError && (
          <Portal
            title='タスクを取得出来ませんでした'
            discription='リロードするか、再度ログインしてください。'
            onPress={() => window.location.reload()}
          />
        )}
        {deleteTaskError && (
          <Portal
            title='タスクを削除出来ませんでした'
            discription='ブラウザをリロードしても直らない場合は開発者へ問い合わせてください。'
            onPress={() => window.location.reload()}
          />
        )}
      </StyledHomeMain>
    </>
  )
}

export default HomePage
