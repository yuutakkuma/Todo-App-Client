import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles.css';
import { App } from './App';

const client = new ApolloClient({
  uri:
    'https://blooming-atoll-62832.herokuapp.com/graphql' ||
    'http://localhost:4000/graphql',
  credentials: 'include'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
