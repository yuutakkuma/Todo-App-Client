import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { LoginBtn } from '../componentStyle/Login.style'

import {
  TestUserLoginMutation,
  TestUserLoginDocument
} from '../../graphql/generated'
import { Loading } from '../Loading'

export const TestUserButton: React.FC = () => {
  const [testLogin, { loading, error, data }] = useMutation<
    TestUserLoginMutation
  >(TestUserLoginDocument)
  const history = useHistory()
  if (loading) return <Loading />
  if (error) return <div>error...</div>

  if (data && data.testUserLogin) {
    localStorage.setItem('token', data.testUserLogin.accessToken)
  }

  return (
    <LoginBtn
      type='button'
      onClick={async () => {
        try {
          await testLogin({
            variables: {
              email: 'test@test.com',
              password: 'test'
            }
          })
        } catch {}
        history.push('/home')
      }}
    >
      テストユーザーでログインする
    </LoginBtn>
  )
}
