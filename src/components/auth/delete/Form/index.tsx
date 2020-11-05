import React, { FC } from 'react'

import FormButton from '../../../common/FormButton'

import {
  StyledDeleteForm,
  StyledDeleteInput,
  DeleteErrorMessage
} from './style'
import { Props } from './type'

const DeleteAccountForm: FC<Props> = ({
  className,
  inputNickname,
  inputEmail,
  inputPassword,
  isLoading,
  onNicknameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  errors
}) => (
  <StyledDeleteForm className={className} onSubmit={onSubmit}>
    <DeleteErrorMessage message={errors?.message} />
    <StyledDeleteInput
      type='nickname'
      placeholder='ニックネーム'
      marginBottom={30}
      value={inputNickname}
      onChange={onNicknameChange}
    />
    <StyledDeleteInput
      type='email'
      placeholder='Eメール'
      marginBottom={30}
      value={inputEmail}
      onChange={onEmailChange}
    />
    <StyledDeleteInput
      type='password'
      placeholder='パスワード'
      marginBottom={50}
      value={inputPassword}
      onChange={onPasswordChange}
    />
    <FormButton type='submit' title='アカウント削除' isLoading={isLoading} />
  </StyledDeleteForm>
)

export default DeleteAccountForm
