import React, { FC, useState, useEffect, useReducer } from 'react'
import { ApolloProvider } from '@apollo/client'

import { GetRefreshTokenDocument } from './graphql/generated'
import { client } from './lib/apollo'
import { Context } from './lib/context'
import { reducer, initialState } from './lib/context/reducer'
import { SetTokenAction } from './lib/context/reducer/actions'
import { Routes } from './pages/Routes'

import Loading from './components/common/Loading'
import { LoadingMode } from './components/common/Loading/type'

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState<boolean>(true)

  const { token } = state
  const height = window.innerHeight

  useEffect(() => {
    client
      .query({ query: GetRefreshTokenDocument })
      .then(({ data: { getRefreshToken } }) => {
        if (getRefreshToken && getRefreshToken.refreshToken) {
          dispatch(SetTokenAction(getRefreshToken.refreshToken))
          setLoading(false)
        } else {
          dispatch(SetTokenAction(''))
        }
      })
      .catch(() => {
        dispatch(SetTokenAction(''))
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
      <Context.Provider value={{ height, token, dispatch, SetTokenAction }}>
        <Routes />
      </Context.Provider>
    </ApolloProvider>
  )
}
