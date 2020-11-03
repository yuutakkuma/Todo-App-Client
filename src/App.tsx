import React, { FC, useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'

import { GetRefreshTokenDocument } from './graphql/generated'

import { client } from './lib/apollo'
import { Context } from './lib/context'
import { Loading } from './components/Loading'
import { Routes } from './Routes'

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Loading />
      </div>
    )
  }
  return (
    <ApolloProvider client={client}>
      <Context.Provider
        value={{
          token: localStorage.getItem('token')
        }}
      >
        <Routes />
      </Context.Provider>
    </ApolloProvider>
  )
}
