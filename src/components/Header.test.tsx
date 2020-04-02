import React from 'react';
import { act, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Header } from './Header';

test('レンダリング', () => {
  act(() => {
    render(
      <MockedProvider>
        <Header />
      </MockedProvider>
    );
  });
});
