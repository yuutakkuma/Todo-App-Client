import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  LoginMutation,
  LoginMutationVariables,
  LoginDocument
} from '../graphql/generated/graphql'

import {
  StyledLoginMain,
  StyledLoginHeading,
  StyledLoginBox,
  LoginForm,
  BackButton
} from './styles/login'

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useHistory()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login, { loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument)

  return (
    <StyledLoginMain>
      <StyledLoginBox flex={0.5} alignItems='center'>
        <BackButton type='button' title='もどる' onClick={() => push('/')} />
      </StyledLoginBox>
      <StyledLoginBox flex={1}>
        <StyledLoginHeading>
          ログインするには必要事項を入力してください。
        </StyledLoginHeading>
      </StyledLoginBox>
      <StyledLoginBox flex={3}>
        <LoginForm
          inputEmail={email}
          inputPassword={password}
          onEmailChange={event => setEmail(event.target.value)}
          onPasswordChange={event => setPassword(event.target.value)}
          onSubmit={async event => {
            event.preventDefault()

            try {
              await login({ variables: { email, password } })
              setEmail('')
              setPassword('')
            } catch {
              console.log('Login error:', error)
            }
          }}
          errors={error?.graphQLErrors[0].message as any}
        />
      </StyledLoginBox>
    </StyledLoginMain>
  )
}

export default LoginPage
