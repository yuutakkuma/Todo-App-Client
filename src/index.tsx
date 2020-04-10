import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles.css';
import { App } from './App';

let graohqlUrl: string;

// 開発用GraphQL URL
if (process.env.NODE_ENV === 'development') {
  graohqlUrl = process.env.REACT_APP_DEVELOPMENT_GRAPHQL_URL!;
}
// 本番環境用GraphQL URL
if (process.env.NODE_ENV === 'production') {
  graohqlUrl = process.env.REACT_APP_PRODUCTION_GRAPHQL_URL!;
}
// TypeGurde
if (typeof graohqlUrl! === 'undefined') {
  graohqlUrl = process.env.REACT_APP_DEVELOPMENT_GRAPHQL_URL!;
}

const client = new ApolloClient({
  uri: graohqlUrl,
  credentials: 'include'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
