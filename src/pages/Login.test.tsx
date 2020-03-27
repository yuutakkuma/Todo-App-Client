import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';

test('レンダリング', () => {
  const { debug } = render(
    <MockedProvider>
      <BrowserRouter>
        <Route component={Login} />
      </BrowserRouter>
    </MockedProvider>
  );
  debug();
});
