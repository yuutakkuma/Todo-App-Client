import { ChangeEvent, FormEvent } from 'react'

export enum ErrorPropertyType {
  NICKNAME = 'nickname',
  EMAIL = 'email',
  PASSWORD = 'password'
}

export interface NicknameErrorType {
  property: ErrorPropertyType.NICKNAME
  constraints: {
    length: string
  }
}

export interface EmailErrorType {
  property: ErrorPropertyType.EMAIL
  constraints: {
    isEmail: string
  }
}

export interface PasswordErrorType {
  property: ErrorPropertyType.PASSWORD
  constraints: {
    length: string
  }
}

export type MessageErrorType =
  | NicknameErrorType
  | EmailErrorType
  | PasswordErrorType

export interface RegisterError {
  message: MessageErrorType[]
}

export interface Props {
  className?: string
  inputNickname: string
  inputEmail: string
  inputPassword: string
  onNicknameChange: (event: ChangeEvent<HTMLInputElement>) => void
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  errors?: RegisterError
}
