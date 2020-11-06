import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  RegisterMutation,
  RegisterMutationVariables,
  RegisterDocument
} from '../graphql/generated'

import RegisterForm from '../components/auth/register/Form'
import Portal from '../components/common/Portal'

import { Main, Heading, Box, BackButton } from './styles/register'

const RegisterPage: FC = () => {
  const [completed, setCompleted] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useHistory()

  const [
    register,
    { loading: registerLoading, error: registerError }
  ] = useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument)

  return (
    <Main>
      <Box flex={0.5} alignItems='center'>
        <BackButton type='button' title='もどる' onClick={() => push('/')} />
      </Box>
      <Box flex={1}>
        <Heading>アカウントを作成するには必要事項を入力してください。</Heading>
      </Box>
      <Box flex={3}>
        <RegisterForm
          inputNickname={nickname}
          inputEmail={email}
          inputPassword={password}
          isLoading={registerLoading}
          onNicknameChange={event => setNickname(event.target.value)}
          onEmailChange={event => setEmail(event.target.value)}
          onPasswordChange={event => setPassword(event.target.value)}
          onSubmit={async event => {
            event.preventDefault()
            await register({ variables: { nickname, email, password } })
              .then(() => {
                setNickname('')
                setEmail('')
                setPassword('')
                setCompleted(true)
              })
              .catch(() => console.error('Register Error'))
          }}
          errors={registerError?.graphQLErrors[0].message as any}
        />
      </Box>
      {completed && (
        <Portal
          title='アカウント作成したよ！'
          discription='さっそくログインしよう!'
          onPress={() => {
            push('login')
          }}
        />
      )}
    </Main>
  )
}

export default RegisterPage
