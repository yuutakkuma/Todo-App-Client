import React, { FC, useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './lib/apollo'
import { Loading } from './components/Loading'
import { Routes } from './Routes'

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const RefreshTokenURL = () => {
    const {
      NODE_ENV,
      REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL,
      REACT_APP_PRODUCTION_REFRESH_TOKEN_URL
    } = process.env

    // 開発環境用　リフレッシュトークンURL
    if (NODE_ENV === 'development' && REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL) {
      return REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL
    }
    // 本番環境用　リフレッシュトークンURL
    if (NODE_ENV === 'production' && REACT_APP_PRODUCTION_REFRESH_TOKEN_URL) {
      return REACT_APP_PRODUCTION_REFRESH_TOKEN_URL
    }

    return ''
  }

  useEffect(() => {
    fetch(RefreshTokenURL(), {
      method: 'POST',
      // credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        console.log('RefreshToken Response:', res)
        setLoading(false)
      })
      .catch(err => console.log('RefreshToken Error:', err))
    // アプリ実行中にリフレッシュトークンURLが変わることは無い
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}>
        <Loading />
      </div>
    )
  }
  console.log('client:', client.link)

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}
