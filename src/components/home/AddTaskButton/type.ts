export interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: () => any
}
