import React from 'react'
import { useMutation } from '@apollo/client'

import { TodoDeleteBtn } from '../componentStyle/TodoList.style'

import {
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoDocument
} from '../../graphql/generated/graphql'
import { Loading } from '../Loading'

interface Props {
  todoId: string
}

export const TodoDeleteButton: React.FC<Props> = props => {
  const [todoDelete, { loading, error }] = useMutation<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >(DeleteTodoDocument)

  if (error) {
    return <div>削除出来ませんでした。</div>
  }
  if (loading) return <Loading />

  return (
    <TodoDeleteBtn
      type='button'
      onClick={async () => {
        try {
          await todoDelete({
            variables: {
              id: props.todoId
            }
          })
        } catch {}
      }}>
      DELETE
    </TodoDeleteBtn>
  )
}
