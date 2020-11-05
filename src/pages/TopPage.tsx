import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import {
  TestUserLoginMutation,
  TestUserLoginMutationVariables,
  TestUserLoginDocument
} from '../graphql/generated'
import Portal from '../components/common/Portal'

import {
  StyledTopMain,
  StyledTopBox,
  StyledTopHeading,
  Button
} from './styles/top'

const TopPage: FC = () => {
  const [
    testLogin,
    { loading: testLoginLoading, error: testLoginError }
  ] = useMutation<TestUserLoginMutation, TestUserLoginMutationVariables>(
    TestUserLoginDocument
  )
  const { push } = useHistory()

  return (
    <StyledTopMain>
      <StyledTopBox>
        <StyledTopHeading>TODO APP</StyledTopHeading>
      </StyledTopBox>
      <StyledTopBox>
        <Button
          type='button'
          title='ログイン'
          marginBottom={50}
          onClick={() => push('login')}
        />
        <Button
          type='button'
          title='新規登録'
          marginBottom={50}
          onClick={() => push('register')}
        />
        <Button
          type='button'
          title='テストユーザーログイン'
          isLoading={testLoginLoading}
          onClick={async () =>
            await testLogin({
              variables: { email: 'test@test.com', password: 'test' }
            })
              .then(({ data }) => {
                if (data && data.testUserLogin) {
                  localStorage.setItem('token', data.testUserLogin.accessToken)
                  push('home')
                } else {
                  throw new Error('アクセストークンを取得出来ませんでした。')
                }
              })
              .catch(() => console.error('testLoginError'))
          }
        />
      </StyledTopBox>
      {testLoginError && (
        <Portal
          title='ログイン出来ませんでした'
          discription='サーバーエラーの可能性があります。'
          onPress={() => {
            window.location.reload()
          }}
        />
      )}
    </StyledTopMain>
  )
}

export default TopPage
