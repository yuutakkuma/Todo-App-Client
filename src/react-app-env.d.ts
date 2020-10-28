/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
    readonly REACT_APP_DEVELOPMENT_GRAPHQL_URL: string | undefined
    readonly REACT_APP_PRODUCTION_GRAPHQL_URL: string | undefined
    readonly REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL: string | undefined
    readonly REACT_APP_PRODUCTION_REFRESH_TOKEN_URL: string | undefined
  }
}
