import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const uri = () => {
  const {
    NODE_ENV,
    REACT_APP_DEVELOPMENT_GRAPHQL_URL,
    REACT_APP_PRODUCTION_GRAPHQL_URL
  } = process.env

  if (NODE_ENV === 'development' && REACT_APP_DEVELOPMENT_GRAPHQL_URL)
    return REACT_APP_DEVELOPMENT_GRAPHQL_URL

  if (NODE_ENV === 'production' && REACT_APP_PRODUCTION_GRAPHQL_URL)
    return REACT_APP_PRODUCTION_GRAPHQL_URL

  return ''
}

const httpLink = createHttpLink({ uri })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getTodoList: {
            merge(existing = [], incoming: any[]) {
              return incoming
            }
          }
        }
      }
    }
  })
})
