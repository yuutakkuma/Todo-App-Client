import { ChangeEvent } from 'react'

export interface Props {
  className?: string
  type?: string
  placeholder?: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
