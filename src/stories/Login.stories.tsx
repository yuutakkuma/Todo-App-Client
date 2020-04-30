import React from 'react';

import { Login } from '../components/Login';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter } from 'react-router-dom';

export default {
  components: Login,
  title: 'Login',
};

export const LoginFrom = () => {
  return (
    <MockedProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </MockedProvider>
  );
};
