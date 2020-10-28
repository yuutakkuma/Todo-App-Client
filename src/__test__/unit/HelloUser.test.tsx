import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { render } from '@testing-library/react'
import { ApolloError } from 'apollo-boost'

import { MeQuery } from '../../graphql/generated/graphql'
import { HelloUser } from '../../components/HelloUser'

const data: MeQuery = {
  me: {
    id: '1',
    nickname: 'リラックマ',
    email: 'rirakuma@rirakuma.com'
  }
}
let apolloError: ApolloError

describe('HelloUser', () => {
  test('ニックネームを表示する', () => {
    const component = render(
      <MockedProvider>
        <HelloUser fetchData={data} isMeDataLoading={false} error={undefined} />
      </MockedProvider>
    )
    // component.debug();
    component.getByText('こんにちはリラックマさん')
  })

  test('受信失敗', () => {
    const canNotReceiveComponent = render(
      <MockedProvider>
        <HelloUser
          fetchData={undefined}
          isMeDataLoading={false}
          error={apolloError}
        />
      </MockedProvider>
    )
    // canNotReceiveComponent.debug();
    canNotReceiveComponent.getByText('ニックネームを受信出来ませんでした。')
  })
})
