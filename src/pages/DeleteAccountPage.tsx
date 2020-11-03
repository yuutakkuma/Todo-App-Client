import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  DeleteAccountMutation,
  DeleteAccountMutationVariables,
  DeleteAccountDocument
} from '../graphql/generated'

import {
  StyledDeleteAccountMain,
  StyledDeleteAccountHeading,
  StyledDeleteAccountBox,
  DeleteAccountForm,
  BackButton
} from './styles/deleteAccount'

const DeleteAccountPage: FC = () => {
  const [nickname, setNickname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useHistory()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deleteAccount, { loading, error }] = useMutation<
    DeleteAccountMutation,
    DeleteAccountMutationVariables
  >(DeleteAccountDocument)

  return (
    <StyledDeleteAccountMain>
      <StyledDeleteAccountBox flex={0.5} alignItems='center'>
        <BackButton type='button' title='もどる' onClick={() => push('home')} />
      </StyledDeleteAccountBox>
      <StyledDeleteAccountBox flex={1}>
        <StyledDeleteAccountHeading>
          アカウントを削除するには必要事項を入力してください。
        </StyledDeleteAccountHeading>
      </StyledDeleteAccountBox>
      <StyledDeleteAccountBox flex={3}>
        <DeleteAccountForm
          inputNickname={nickname}
          inputEmail={email}
          inputPassword={password}
          onNicknameChange={event => setNickname(event.target.value)}
          onEmailChange={event => setEmail(event.target.value)}
          onPasswordChange={event => setPassword(event.target.value)}
          onSubmit={async event => {
            event.preventDefault()

            try {
              await deleteAccount({ variables: { nickname, email, password } })
              setNickname('')
              setEmail('')
              setPassword('')
            } catch {
              console.log('DeleteAccount error:', error)
            }
          }}
          errors={error?.graphQLErrors[0].message as any}
        />
      </StyledDeleteAccountBox>
    </StyledDeleteAccountMain>
  )
}

export default DeleteAccountPage
