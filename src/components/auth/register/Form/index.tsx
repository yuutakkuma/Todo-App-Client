import React, { FC } from 'react'

import FormButton from '../../../common/FormButton'

import { StyledRegisterForm, StyledRegisterInput } from './style'
import { Props } from './type'

const RegisterForm: FC<Props> = ({
  inputNickname,
  inputEmail,
  inputPassword,
  onNicknameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit
}) => (
  <StyledRegisterForm onSubmit={onSubmit}>
    <StyledRegisterInput
      type='nickname'
      placeholder='ニックネーム'
      marginBottom={30}
      value={inputNickname}
      onChange={onNicknameChange}
    />
    <StyledRegisterInput
      type='email'
      placeholder='Eメール'
      marginBottom={30}
      value={inputEmail}
      onChange={onEmailChange}
    />
    <StyledRegisterInput
      type='password'
      placeholder='パスワード'
      marginBottom={30}
      value={inputPassword}
      onChange={onPasswordChange}
    />
    <FormButton type='submit' title='新規登録' />
  </StyledRegisterForm>
)

export default RegisterForm
