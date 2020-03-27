import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Register } from './Register';
import { BrowserRouter, Route } from 'react-router-dom';

test('レンダリング', () => {
  const { debug } = render(
    <MockedProvider>
      <BrowserRouter>
        <Route component={Register} />
      </BrowserRouter>
    </MockedProvider>
  );
  debug();
});
