import { ChangeEvent } from 'react'

export interface Props {
  type?: string
  placeholder?: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
