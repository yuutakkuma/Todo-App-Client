import React, { FC } from 'react'

import FormButton from '../../../common/FormButton'

import { Form, Input, RegisterErrorMessage } from './style'
import { Props, ErrorPropertyType } from './type'

const RegisterForm: FC<Props> = ({
  className,
  inputNickname,
  inputEmail,
  inputPassword,
  isLoading,
  disabled,
  onNicknameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  errors
}) => {
  const registerErrors =
    errors &&
    errors.message.map(error => {
      switch (error.property) {
        case ErrorPropertyType.NICKNAME: {
          return {
            prop: error.property,
            mes: error.constraints.length
          }
        }

        case ErrorPropertyType.EMAIL: {
          return {
            prop: error.property,
            mes: error.constraints.isEmail
          }
        }

        case ErrorPropertyType.PASSWORD: {
          return {
            prop: error.property,
            mes: error.constraints.length
          }
        }

        default:
          throw new Error('Different type')
      }
    })

  return (
    <Form className={className} onSubmit={onSubmit}>
      <RegisterErrorMessage
        message={
          registerErrors &&
          registerErrors.find(({ prop }) => prop === ErrorPropertyType.NICKNAME)
            ?.mes
        }
      />
      <Input
        type='nickname'
        placeholder='ニックネーム'
        value={inputNickname}
        onChange={onNicknameChange}
      />
      <RegisterErrorMessage
        message={
          registerErrors &&
          registerErrors.find(({ prop }) => prop === ErrorPropertyType.EMAIL)
            ?.mes
        }
      />
      <Input
        type='email'
        placeholder='Eメール'
        value={inputEmail}
        onChange={onEmailChange}
      />
      <RegisterErrorMessage
        message={
          registerErrors &&
          registerErrors.find(({ prop }) => prop === ErrorPropertyType.PASSWORD)
            ?.mes
        }
      />
      <Input
        type='password'
        placeholder='パスワード'
        marginBottom={50}
        value={inputPassword}
        onChange={onPasswordChange}
      />
      <FormButton
        type='submit'
        title='新規登録'
        isLoading={isLoading}
        disabled={disabled}
      />
    </Form>
  )
}

export default RegisterForm
