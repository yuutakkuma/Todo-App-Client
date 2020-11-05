import React, { FC, useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'

import { GetRefreshTokenDocument } from './graphql/generated'

import Loading from './components/common/Loading'

import { client } from './lib/apollo'
import { Context } from './lib/context'
import { Routes } from './pages/Routes'

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
        <Loading
          width='100px'
          height='100px'
          circleColor='rgba(45, 97, 135, 1)'
        />
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
