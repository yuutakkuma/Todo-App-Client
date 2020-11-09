import React, { FC } from 'react'

import FormButton from '../../../common/FormButton'

import { Form, Input, LoginErrorMessage } from './style'
import { Props } from './type'

const LoginFrom: FC<Props> = ({
  className,
  inputEmail,
  inputPassword,
  isLoading,
  disabled,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  errors
}) => (
  <Form className={className} onSubmit={onSubmit}>
    <LoginErrorMessage message={errors?.message} />
    <Input
      type='email'
      placeholder='Eメール'
      marginBottom={30}
      value={inputEmail}
      onChange={onEmailChange}
    />
    <Input
      type='password'
      placeholder='パスワード'
      marginBottom={30}
      value={inputPassword}
      onChange={onPasswordChange}
    />
    <FormButton
      type='submit'
      title='ログイン'
      isLoading={isLoading}
      disabled={disabled}
    />
  </Form>
)

export default LoginFrom
