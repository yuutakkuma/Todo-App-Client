import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { Login } from '../../components/Login';

const email = 'todoman@todo.com';
const password = 'tooooooodo';

let component: RenderResult;

beforeAll(() => {
  component = render(
    <MockedProvider>
      <BrowserRouter>
        <Route component={Login} />
      </BrowserRouter>
    </MockedProvider>
  );
});
describe('Login', () => {
  test('input入力', () => {
    const inputEmail = component.getByPlaceholderText('Eメール');
    const inputPassword = component.getByPlaceholderText('パスワード');

    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });
    // component.debug();
  });
});
