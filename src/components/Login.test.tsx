import React from 'react';
import {
  render,
  act,
  fireEvent,
  waitForDomChange,
  createEvent
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';
import { LoginDocument } from '../generated/graphql';

const email = 'todoman@todo.com';
const password = 'tooooooodo';

const mocks = [
  {
    request: {
      query: LoginDocument,
      variables: {
        email: email,
        password: password
      },
      result: {
        data: {
          login: true
        }
      }
    }
  }
];

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

test('input入力', async () => {
  await act(async () => {
    const { debug, getByPlaceholderText, getByRole } = render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <Route component={Login} />
        </BrowserRouter>
      </MockedProvider>
    );

    const inputEmail = getByPlaceholderText('email');
    const inputPassword = getByPlaceholderText('password');

    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });
    await waitForDomChange();
    debug();
    const loginBtn = getByRole('button');
    createEvent.click(loginBtn);
  });
});
