import React from 'react'
import { useHistory } from 'react-router-dom'

import { LoginBtn } from '../componentStyle/Login.style'

import { Loading } from '../Loading'
import { useTestUserLoginMutation } from '../../generated/graphql'

export const TestUserButton: React.FC = () => {
  const [testLogin, { loading, error }] = useTestUserLoginMutation()
  const history = useHistory()
  if (loading) return <Loading />
  if (error) return <div>error...</div>
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
