import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  RegisterMutation,
  RegisterMutationVariables,
  RegisterDocument
} from '../graphql/generated/graphql'

import {
  StyledRegisterMain,
  StyledRegisterHeading,
  StyledRegisterBox,
  RegisterForm,
  BackButton
} from './styles/register'

const RegisterPage: FC = () => {
  const [nickname, setNickname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useHistory()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [register, { loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument)

  return (
    <StyledRegisterMain>
      <StyledRegisterBox flex={0.5} alignItems='center'>
        <BackButton type='button' title='もどる' onClick={() => push('/')} />
      </StyledRegisterBox>
      <StyledRegisterBox flex={1}>
        <StyledRegisterHeading>
          アカウントを作成するには必要事項を入力してください。
        </StyledRegisterHeading>
      </StyledRegisterBox>
      <StyledRegisterBox flex={3}>
        <RegisterForm
          inputNickname={nickname}
          inputEmail={email}
          inputPassword={password}
          onNicknameChange={event => setNickname(event.target.value)}
          onEmailChange={event => setEmail(event.target.value)}
          onPasswordChange={event => setPassword(event.target.value)}
          onSubmit={async event => {
            event.preventDefault()

            try {
              await register({ variables: { nickname, email, password } })
              setNickname('')
              setEmail('')
              setPassword('')
            } catch {
              console.log('register error:', error)
            }
          }}
          errors={error?.graphQLErrors[0].message as any}
        />
      </StyledRegisterBox>
    </StyledRegisterMain>
  )
}

export default RegisterPage
