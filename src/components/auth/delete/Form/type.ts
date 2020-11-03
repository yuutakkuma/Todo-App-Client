import { ChangeEvent, FormEvent } from 'react'

export interface Props {
  className?: string
  inputNickname: string
  inputEmail: string
  inputPassword: string
  onNicknameChange: (event: ChangeEvent<HTMLInputElement>) => void
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  errors?: {
    message: string
  }
}
