import React from 'react'

import { TodoDeleteBtn } from '../componentStyle/TodoList.style'

import { useDeleteTodoMutation } from '../../graphql/generated/graphql'
import { Loading } from '../Loading'

interface Props {
  todoId: string
}

export const TodoDeleteButton: React.FC<Props> = props => {
  const [todoDelete, { loading, error }] = useDeleteTodoMutation()

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
