import React, { useReducer } from 'react'
import { useMutation } from '@apollo/client'
import _ from 'lodash'

import { Inner } from '../pages/pageStyle/Inner.style'
import { TodoForm, TodoInput } from './componentStyle/CreateTodo.style'

import {
  CreateTodoMutation,
  CreateTodoMutationVariables,
  CreateTodoDocument
} from '../graphql/generated'
import { TodoCreateButton } from './button/TodoCreateButton'
import { CharacterCount } from './CharacterCount'
import { CreateTodoGqlError } from '../models/createTodoGqlError'
import { formReducer, initialState } from '../store/FormStore'

let todoError: string
// エラーを表示するトリガー
let reloadTrigger: boolean = false

export const CreateTodo: React.FC = () => {
  const [createTodo, { loading, error }] = useMutation<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >(CreateTodoDocument)
  const [state, dispatch] = useReducer(formReducer, initialState)

  if (error) {
    // GraphQLErrorを取得
    const errorObj = _.map(error.graphQLErrors, 'message')
    const errors: CreateTodoGqlError = errorObj[0] as any
    todoError = errors.message[0].constraints.length
    // エラーを表示させる
    reloadTrigger = true
  }

  return (
    <TodoForm
      autoComplete='off'
      onSubmit={async event => {
        event.preventDefault()

        try {
          await createTodo({
            variables: {
              title: state.task
            }
          })
          state.task = ''
          // エラーの表示を消す
          reloadTrigger = false
        } catch {}
      }}
    >
      <Inner innerWidth={100} style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <CharacterCount
            value={state.task}
            error={todoError}
            reload={reloadTrigger}
          />
          <TodoInput
            name='title'
            placeholder='やること'
            value={state.task}
            onChange={event => {
              dispatch({ type: 'createTodo', value: event.target.value })
            }}
          />
        </div>
        <TodoCreateButton isCreateLoading={loading} />
      </Inner>
    </TodoForm>
  )
}
