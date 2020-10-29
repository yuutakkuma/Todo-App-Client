import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { LogOutBtn } from '../componentStyle/Header.style'

import { LogOutMutation, LogOutDocument } from '../../graphql/generated/graphql'
import { Loading } from '../Loading'

export const LogOutButton: React.FC = () => {
  const history = useHistory()
  const [logOut, { loading }] = useMutation<LogOutMutation>(LogOutDocument)

  if (loading) return <Loading />

  return (
    <LogOutBtn
      onClick={async () => {
        await logOut()
        localStorage.setItem('token', '')
        history.push('/')
      }}>
      ログアウト
    </LogOutBtn>
  )
}
