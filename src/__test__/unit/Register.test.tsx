import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import { Register } from '../../pages/Register'

const nickName = 'ToDoマン'
const email = 'todoman@todo.com'
const password = 'tooooooodo'

describe('Register', () => {
  test('inputに入力', () => {
    const conponent = render(
      <MockedProvider>
        <BrowserRouter>
          <Route component={Register} />
        </BrowserRouter>
      </MockedProvider>
    )
    const inputNickName = conponent.getByPlaceholderText('ニックネーム')
    const inputEmail = conponent.getByPlaceholderText('Eメール')
    const inputPassword = conponent.getByPlaceholderText('パスワード')

    fireEvent.change(inputNickName, { target: { value: nickName } })
    fireEvent.change(inputEmail, { target: { value: email } })
    fireEvent.change(inputPassword, { target: { value: password } })
    // conponent.debug();
  })
})
