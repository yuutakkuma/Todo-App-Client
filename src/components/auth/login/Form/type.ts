import { ChangeEvent, FormEvent } from 'react'

export interface Props {
  className?: string
  inputEmail: string
  inputPassword: string
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  errors?: {
    message: string
  }
}
