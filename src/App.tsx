import React, { FC, useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './lib/apollo'
import { Loading } from './components/Loading'
import { Routes } from './Routes'

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [refreshTokenUrl, setRefreshTokenUrl] = useState<string>('')
  const {
    NODE_ENV,
    REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL,
    REACT_APP_PRODUCTION_REFRESH_TOKEN_URL
  } = process.env
  // 開発環境用　リフレッシュトークンURL
  if (NODE_ENV === 'development' && REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL) {
    setRefreshTokenUrl(REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL)
  }
  // 本番環境用　リフレッシュトークンURL
  if (NODE_ENV === 'production' && REACT_APP_PRODUCTION_REFRESH_TOKEN_URL) {
    setRefreshTokenUrl(REACT_APP_PRODUCTION_REFRESH_TOKEN_URL)
  }

  useEffect(() => {
    fetch(refreshTokenUrl, {
      method: 'POST',
      credentials: 'include'
    }).then(() => {
      setLoading(false)
    })
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

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}
