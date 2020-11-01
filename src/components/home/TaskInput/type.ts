import { ChangeEvent } from 'react'

export interface Props {
  inputValue: string | number
  disabled?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: () => any
}
