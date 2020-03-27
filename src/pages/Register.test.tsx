import React from 'react';
import {
  render,
  fireEvent,
  waitForDomChange,
  createEvent
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Register } from './Register';
import { BrowserRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { RegisterDocument } from '../generated/graphql';

const userName = 'ToDoマン';
const email = 'todoman@todo.com';
const password = 'tooooooodo';

const mocks = [
  {
    request: {
      query: RegisterDocument,
      variables: {
        userName: userName,
        email: email,
        password: password
      },
      result: {
        data: {
          register: true
        }
      }
    }
  }
];

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

test('inputに入力', async () => {
  await act(async () => {
    const { debug, getByPlaceholderText, getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Route component={Register} />
        </BrowserRouter>
      </MockedProvider>
    );
    const inputUserName = getByPlaceholderText('userName');
    const inputEmail = getByPlaceholderText('email');
    const inputPassword = getByPlaceholderText('password');

    fireEvent.change(inputUserName, { target: { value: userName } });
    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });
    await waitForDomChange();
    debug();
    const registerBtn = getByRole('button');
    createEvent.click(registerBtn);
  });
});
