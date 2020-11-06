import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  LoginMutation,
  LoginMutationVariables,
  LoginDocument
} from '../graphql/generated'

import Portal from '../components/common/Portal'

import { Main, Heading, Box, LoginForm, BackButton } from './styles/login'

const LoginPage: FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [tokenError, setTokenError] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useHistory()

  const [login, { loading: loginLoading, error: LoginError }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument)

  return (
    <Main>
      <Box flex={0.5} alignItems='center'>
        <BackButton type='button' title='もどる' onClick={() => push('/')} />
      </Box>
      <Box flex={1}>
        <Heading>ログインするには必要事項を入力してください。</Heading>
      </Box>
      <Box flex={3}>
        <LoginForm
          inputEmail={email}
          inputPassword={password}
          isLoading={loginLoading}
          onEmailChange={event => setEmail(event.target.value)}
          onPasswordChange={event => setPassword(event.target.value)}
          onSubmit={async event => {
            event.preventDefault()
            await login({ variables: { email, password } })
              .then(result => {
                if (result.data && result.data.login) {
                  localStorage.setItem('token', result.data.login.accessToken)
                  setEmail('')
                  setPassword('')
                  setLoggedIn(true)
                } else {
                  setTokenError(true)
                }
              })
              .catch(() => console.error('Login Error'))
          }}
          errors={LoginError?.graphQLErrors[0].message as any}
        />
      </Box>
      {loggedIn && (
        <Portal
          title='ログインしました!'
          discription='タスクを管理しよう!'
          onPress={() => {
            push('home')
          }}
        />
      )}
      {tokenError && (
        <Portal
          title='エラー'
          discription='アクセストークンを取得出来ませんでした。再度ログインするか、しばらくたってからログインしてください。'
          onPress={() => {
            setTokenError(false)
          }}
        />
      )}
    </Main>
  )
}

export default LoginPage
