import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles.css';
import { TodoApp } from './components/TodoApp';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodoApp />
  </ApolloProvider>,
  document.getElementById('root')
);
