import React from 'react'

import { NickName } from './componentStyle/HelloUser.style'

import { MeQuery } from '../graphql/generated/graphql'
import { ApolloError } from '@apollo/client'
import { Loading } from './Loading'

interface Props {
  fetchData: MeQuery | undefined
  isMeDataLoading: boolean
  error: ApolloError | undefined
}

export const HelloUser: React.FC<Props> = props => {
  if (props.isMeDataLoading) return <Loading />

  if (
    typeof props.fetchData === 'undefined' ||
    !props.fetchData.me ||
    props.error
  ) {
    return <div>ニックネームを受信出来ませんでした。</div>
  }

  return (
    <NickName>
      <h2>こんにちは{props.fetchData.me.nickname}さん</h2>
    </NickName>
  )
}
