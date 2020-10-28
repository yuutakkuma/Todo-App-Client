import React, { useReducer } from 'react'
import _ from 'lodash'

import { Form } from '../pages/pageStyle/Form.style'
import { Inner } from '../pages/pageStyle/Inner.style'
import { LoginError, LoginInput } from './componentStyle/Login.style'

import { FormButtonBase } from './button/FormButtonBase'
import { useLoginMutation } from '../graphql/generated/graphql'
import { useHistory } from 'react-router-dom'
import { loginGqlError } from '../models/loginGqlError'
import { TestUserButton } from './button/TestUserButton'
import { formReducer, initialState } from '../store/FormStore'
import { Loading } from './Loading'

let errorMessage: loginGqlError

export const Login: React.FC = () => {
  const history = useHistory()
  const [login, { loading, error }] = useLoginMutation()
  const [state, dispatch] = useReducer(formReducer, initialState)

  if (error) {
    // GraphQLErrorを取得
    const arry = _.map(error.graphQLErrors, 'message')
    errorMessage = arry[0] as any
  }

  return (
    <Form
      onSubmit={async event => {
        event.preventDefault()
        console.log(state.email)

        try {
          await login({
            variables: {
              email: state.email,
              password: state.password
            }
          })
          history.push('/home')
        } catch {}
      }}>
      <Inner innerWidth={80}>
        {error ? <LoginError>{errorMessage.message}</LoginError> : undefined}
        <LoginInput
          placeholder='Eメール'
          value={state.email}
          onChange={event => {
            dispatch({ type: 'emailType', value: event.target.value })
          }}
        />
        <LoginInput
          type='password'
          placeholder='パスワード'
          value={state.password}
          onChange={event => {
            dispatch({ type: 'passwordType', value: event.target.value })
          }}
        />
        {loading ? (
          <Loading />
        ) : (
          <FormButtonBase title='ログイン' type='submit' />
        )}
        <TestUserButton />
      </Inner>
    </Form>
  )
}
