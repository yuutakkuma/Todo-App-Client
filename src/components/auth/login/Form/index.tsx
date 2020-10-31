import React, { FC } from 'react'

import FormButton from '../../../common/FormButton'

import { StyledLoginForm, StyledLoginInput, LoginErrorMessage } from './style'
import { Props } from './type'

const LoginFrom: FC<Props> = ({
  className,
  inputEmail,
  inputPassword,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  errors
}) => (
  <StyledLoginForm className={className} onSubmit={onSubmit}>
    <LoginErrorMessage message={errors?.message} />
    <StyledLoginInput
      type='email'
      placeholder='Eメール'
      marginBottom={30}
      value={inputEmail}
      onChange={onEmailChange}
    />
    <StyledLoginInput
      type='password'
      placeholder='パスワード'
      marginBottom={30}
      value={inputPassword}
      onChange={onPasswordChange}
    />
    <FormButton type='submit' title='ログイン' />
  </StyledLoginForm>
)

export default LoginFrom
