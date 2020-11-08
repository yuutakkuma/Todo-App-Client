import React, { FC, useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'

import { GetRefreshTokenDocument } from './graphql/generated'

import Loading from './components/common/Loading'

import { client } from './lib/apollo'
import { Context } from './lib/context'
import { Routes } from './pages/Routes'
import { LoadingMode } from './components/common/Loading/type'

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const height = window.innerHeight

  useEffect(() => {
    client
      .query({ query: GetRefreshTokenDocument })
      .then(({ data: { getRefreshToken } }) => {
        if (getRefreshToken && getRefreshToken.refreshToken) {
          localStorage.setItem('token', getRefreshToken.refreshToken)
          setLoading(false)
        } else {
          localStorage.setItem('token', '')
        }
      })
      .catch(err => {
        localStorage.setItem('token', '')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div
        style={{
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loading mode={LoadingMode.LARGE} />
      </div>
    )
  }
  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ height }}>
        <Routes />
      </Context.Provider>
    </ApolloProvider>
  )
}
